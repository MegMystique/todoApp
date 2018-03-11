import {BrowserModule} from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule}   from '@angular/forms';
import {AppComponent} from './app.component';
import {TodoAppComponent} from './todo-app/todo-app.component';
import {TodoService} from './todo.service'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
  MatSlideToggleModule,
  MatIconModule,MatRadioModule,
} from '@angular/material';
import {MatInputModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {TodoStreamService} from './todo-stream.service';
import { TodoManagePanelComponent } from './todo-app/todo-manage-panel/todo-manage-panel.component';
import { TodoItemComponent } from './todo-app/todo-item/todo-item.component'
@NgModule({
  declarations: [
    AppComponent,
    TodoAppComponent,
    TodoManagePanelComponent,
    TodoItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatSidenavModule, MatToolbarModule,MatSlideToggleModule,
    MatIconModule,MatRadioModule,
    HttpClientModule
  ],
  providers: [TodoService,TodoStreamService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
