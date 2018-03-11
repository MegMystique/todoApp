import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
  apiUrl = 'http://127.0.0.1:5000/todo/api/v1.0/';

  constructor(private http: HttpClient) {
  }


  loadTodosFromServer() {
    return this.http.get(this.apiUrl + `tasks`)
  }

  addTodo(todo) {
    return this.http.post(this.apiUrl + `tasks`, todo)
  }

  removeTodo(id) {
    return this.http.delete(this.apiUrl + `tasks/${id}`)
  }

  updateTodo(todo) {
    return this.http.put(this.apiUrl + `tasks/${todo.id}`, todo)
  }

}
