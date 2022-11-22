import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Shared/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Url = 'http://localhost:9999/'
  AllProducts:any = [];
  constructor(private _productService:ProductService) { }

  ngOnInit(): void {
    this._productService.GetAllProducts().subscribe((ResponseComingFromBackend:any)=>{
      this.AllProducts = ResponseComingFromBackend.Result;
    })
  }

}
