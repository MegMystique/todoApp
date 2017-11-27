import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {TodoStreamService} from '../../todo-stream.service';
@Component({
  selector: 'app-todo-manage-panel',
  templateUrl: './todo-manage-panel.component.html',
  styleUrls: ['./todo-manage-panel.component.css']
})
export class TodoManagePanelComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private streamService:TodoStreamService) {
  }

  complete: boolean = false;

  ngOnInit() {
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  filterTodo(){
    this.complete=!this.complete;
    this.streamService.filterTodo(this.complete)
  }
}
