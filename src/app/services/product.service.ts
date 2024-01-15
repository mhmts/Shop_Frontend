import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Product } from '../models/product';

import { ListResponseModel } from '../models/listResponseModel';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44328/api/';
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    let newPath = this.apiUrl + 'products/getall';
    //  console.log(newPath)
    return this.httpClient.get<Product[]>(newPath);
  }

  getProductsByCategory(
    categoryId: number
  ): Observable<Product[]> {
    let newPath =
      this.apiUrl + 'products/getlistbycategory?categoryId=' + categoryId;
      console.log(newPath)
    return this.httpClient.get<Product[]>(newPath);
  }

  add(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiUrl + 'products/add', product);
  }
}
