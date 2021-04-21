import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TodoListComponent implements OnInit {
  todoItem;
  todoItemList = [];
  constructor() { }

  ngOnInit(): void {
  }

  addTodoItem() {
    console.log(this.todoItem);
    if (this.todoItem) {
      this.todoItemList.push(this.todoItem);
      this.todoItem = '';
    }
  }
  removeTodoItem(id) {
    if (this.todoItemList) {
      delete this.todoItemList[id];
    }

  }
}
