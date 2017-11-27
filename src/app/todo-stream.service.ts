import {Subject} from 'rxjs/Subject';
import {Injectable, Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {Todo} from './todo';

@Injectable()
export class TodoStreamService {
  todoChanges = new Subject<Object[]>();
  filterOn=false;
  private todos = [];

  constructor() {
  }

  getTodos() {
    return this.todos.slice();
  }

  setTodos(todos) {
    this.todos = todos;
    this.todos = this.todos.map(todo => new Todo(todo));
    this.todoChanges.next(this.todos.slice());
  }

  addTodo(todo) {
    this.todos.push(todo);
    this.filterTodo(this.filterOn);
  }

  removeTodo(todo) {
    //MUST BE BY ID!
    this.todos = this.todos.filter(td => td.title != todo.title);
    this.filterTodo(this.filterOn);
  }
  filterTodo(complete){
    let filteredTodos=this.todos.filter(todo=>!todo.complete);
    if (complete) {this.todoChanges.next(filteredTodos.slice());this.filterOn=true}
    else {this.todoChanges.next(this.todos.slice());this.filterOn=false}
  }

}
