import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL = 'http://localhost: 9999/'

  constructor( private HttpClient:HttpClient) { }

  CreateProductCard(payload:any){
    // this.HttpClient.post(this.URL,payload)
   return this.HttpClient.post('http://localhost:9999/ProductManagement/ProductData',payload)
  }

  GetAllProducts(){
    return this.HttpClient.get('http://localhost:9999/ProductManagement/GetProductData')
  }
}
