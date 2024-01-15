import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl="https://localhost:44328/api/Categories/getall"
  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<Category[]>{//Observable yakalanabilir
    return this.httpClient
    .get<Category[]>(this.apiUrl)
  }
}