import {TodoService} from '../todo.service'
import { Todo } from '../todo';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {TodoStreamService} from '../todo-stream.service';
import 'rxjs/add/operator/takeUntil';
@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit, OnDestroy {
  newTodo: Todo = new Todo();
  todos:any=[];
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  constructor(private todoService:TodoService,private streamService:TodoStreamService) { }

  ngOnInit() {
    this.streamService.todoChanges
      .takeUntil(this.ngUnsubscribe)
      .subscribe(todos => this.filterTodos(todos));
    this.todoService.loadTodosFromServer();
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  filterTodos(todos){
    this.todos=todos
  }
  addTodo(){
    //create td on server
    this.streamService.addTodo(this.newTodo);
    this.newTodo=new Todo();
  }

}
