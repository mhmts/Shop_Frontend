import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { todo } from "../models/todo";

@Injectable({
  providedIn: 'root'
})
export class todoService {
  apiUrl="https://jsonplaceholder.typicode.com/todos"
  constructor(private httpClient:HttpClient) { }

  getTodos():Observable<todo[]>{
 return this.httpClient.get<todo[]>(this.apiUrl); 
  
  }
}
