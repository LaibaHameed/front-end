import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
// import { ProductService } from 'src/app/Shared/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @ViewChild('FileSelect') FileSelect: ElementRef | any;

  SelectSizes = ['Small', 'Medium', 'Large', 'X-Large', 'XX-Large'];
  SelectCategory = ['Women', 'Men'];
  NewSizeArray: any = [];
  ImageArray: any = [];
  DisableButtonTrue: boolean = false;
  ProductForm: FormGroup | any;

  constructor(
    private FormBuilder: FormBuilder,
    private ToasterService: ToastrService,
    // private ProductService: ProductService
  ) {
    this.ProductFormModel();
  }

  ngOnInit(): void {}

  ProductFormModel() {
    this.ProductForm = this.FormBuilder.group({
      productName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]*$/),
      ]),
      quantity: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]*$/),
      ]),
      color: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-z]+$/),
      ]),
      productMaterial: new FormControl('', Validators.required),
      companyName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-z]+$/),
      ]),
      imageName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-z]+$/),
      ]),
      image: new FormArray([]),
      description: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      size: new FormArray([]),
    });
  }

  GetSizes(event: any) {
    if (event.target.checked) {
      this.NewSizeArray.push(event.target.value);
    } else {
      this.NewSizeArray = this.NewSizeArray.filter(
        (value: any) => value != event.target.value
      );
    }
  }

  GetImages(event: any) {
    console.log(this.FileSelect.nativeElement);

    console.log(event.target.files);
    if (event.target.files.length <= 5) {
      this.ImageArray.push(event.target.files);
    } else {
      this.ImageArray = [];
      this.DisableButtonTrue = true;
      this.FileSelect.nativeElement.value = null;
      this.ToasterService.warning(
        `Image selection limit is 5 but you have selected ${event.target.files.length}`
      );
    }
  }

  CreatProduct() {
    // submitProductForm()
    // getter function **angular mai hm getter or setter funs use krty hai  cheezo ko get or set krny k liye(it is used for get and set things)
    // console.log(this.ProductForm.get('productName').setValue('sir g bhut bare gappi hain'));
    // console.log(this.ProductForm.get('productName').value);

    this.NewSizeArray.forEach((elements: string) => {
      let controls = new FormControl(elements);
      this.ProductForm.get('size').push(controls); // controls mean formControl
    });

    this.ImageArray.forEach((elements: any) => {
      let controls = new FormControl(elements);
      this.ProductForm.get('image').push(controls); // controls mean formControl
    });

    let MultipartFormData = new FormData();
    MultipartFormData.append('productName',this.ProductForm.get('productName').value);
    MultipartFormData.append('price', this.ProductForm.get('price').value);
    MultipartFormData.append('quantity',this.ProductForm.get('quantity').value);
    MultipartFormData.append('color', this.ProductForm.get('color').value);
    MultipartFormData.append('productMaterial',this.ProductForm.get('productMaterial').value);
    MultipartFormData.append('companyName',this.ProductForm.get('companyName').value);
    MultipartFormData.append('imageName',this.ProductForm.get('imageName').value);
    MultipartFormData.append('image', this.ProductForm.get('image').value);
    MultipartFormData.append('description',this.ProductForm.get('description').value);
    MultipartFormData.append('category',this.ProductForm.get('category').value);
    MultipartFormData.append('size', this.ProductForm.get('size').value);
    // 1:30
    let result = this.ProductForm.value;
    console.log(result);
  }
}
