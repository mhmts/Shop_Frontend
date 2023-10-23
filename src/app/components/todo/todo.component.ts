import { Component } from "@angular/core";
import { todo } from "src/app/models/todo";
import { todoService } from "src/app/services/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos:todo[]=[];
  dataLoaded=false;

  constructor(private todoService:todoService){}
  
 ngOnInit():void{
   this.getTodos();
 }
 getTodos(){
  this.todoService.getTodos()
  .subscribe((response) => {
    this.todos = response;
    this.dataLoaded=true
  });
 }
}
