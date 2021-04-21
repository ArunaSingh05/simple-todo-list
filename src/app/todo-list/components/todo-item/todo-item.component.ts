import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() item;
  @Output() removeFromList = new EventEmitter();
  isChecked: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  addClassChecked() {
    this.isChecked = true;
  }

  removeItem() {
    this.removeFromList.emit(this.item.id);
  }
}
