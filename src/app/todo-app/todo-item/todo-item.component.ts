import {Component, OnInit, Input} from '@angular/core';
import {TodoStreamService} from '../../todo-stream.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo;

  constructor(
     private streamService: TodoStreamService
  ) {
  }

  ngOnInit() {
  }

  deleteTodo(todo) {
      this.streamService.removeTodo(todo);
  }

  updateTodo(todo) {
    this.streamService.updateTodo(todo);
  }
}
