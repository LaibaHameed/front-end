import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL = 'http://localhost:8888/'

  constructor( private HttpClient:HttpClient) { }

  CreateProductCard(payload:any){
    // this.HttpClient.post(this.URL,payload)
    this.HttpClient.post('http://localhost:8888/',payload)
    // 1:43
  }
}
