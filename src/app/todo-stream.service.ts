import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';
import {Todo} from './todo';
import {TodoService} from './todo.service';

@Injectable()
export class TodoStreamService {
  todoChanges = new Subject<Object[]>();
  filterOn = false;
  private todos = [];

  constructor(private todoService: TodoService) {
  }

  getTodos() {
    this.todoService.loadTodosFromServer().subscribe((res: Response) => {
      this.setTodos(res['tasks']);
    });
  }

  setTodos(todos) {
    this.todos = todos;
    this.todos = this.todos.map(todo => new Todo(todo));
    this.todoChanges.next(this.todos.slice());
  }

  addTodo(todo) {
    this.todoService.addTodo(todo).subscribe((res: Response) => {
      this.todos.push(res['task']);
      this.filterTodo(this.filterOn);
    });
  }

  removeTodo(todo) {
    this.todoService.removeTodo(todo.id).subscribe(() => {
      this.todos = this.todos.filter(td => td.id != todo.id);
      this.filterTodo(this.filterOn);
    });

  }

  filterTodo(complete) {
    let filteredTodos = this.todos.filter(todo => !todo.complete);
    if (complete) {
      this.todoChanges.next(filteredTodos.slice());
      this.filterOn = true
    }
    else {
      this.todoChanges.next(this.todos.slice());
      this.filterOn = false
    }
  }

  updateTodo(todo) {
    this.todoService.updateTodo(todo)
      .subscribe(() => {
        todo.edit = false;
      })
  }
}
