import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class TodoListModule { }
