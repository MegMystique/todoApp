import {Injectable} from '@angular/core';
import {Todo} from './todo';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import { HttpClientModule }   from '@angular/common/http';
import 'rxjs/add/operator/map';
import {TodoStreamService} from './todo-stream.service'

@Injectable()
export class TodoService {

  constructor(private http: HttpClient, private streamService:TodoStreamService) {
  }


  loadTodosFromServer() {
    //const headers = this.authService.getHeaders();
    return this.http.get('assets/todoData.json')
      .subscribe((res: Response) => {this.streamService.setTodos(res);
    });
  }

}
