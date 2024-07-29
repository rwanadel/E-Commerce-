import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductReqestService {
  constructor(private http: HttpClient) {}
  getProductList() {
    return this.http.get(`https://dummyjson.com/products`);
  }
  getProductDetails(id: number) {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}
