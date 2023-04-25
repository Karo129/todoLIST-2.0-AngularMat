import { Component, OnInit } from '@angular/core';
import { newTodo } from 'src/app/newTodo.interface';
import { TodoListService } from 'src/app/services/todo-list.service';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  todos: newTodo[] = [];

  constructor(private todolistservice: TodoListService) { }

  ngOnInit(): void {
    this.todos = this.todolistservice.getTasks();
  }

  deleteTodo(index: number) {
    this.todolistservice.removeTodo(index);
  }


}
