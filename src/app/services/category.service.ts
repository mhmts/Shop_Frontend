import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl="https://localhost:44328/api/Categories"
  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<Category[]>{
 return this.httpClient.get<Category[]>(this.apiUrl); 
}
}