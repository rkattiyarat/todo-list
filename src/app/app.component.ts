import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos : Todo[] = [];
  newTodo : string;
  inputEmpty: boolean = false;


  addTodo() {
    if (this.newTodo) {
    let todo = new Todo();
    todo.description = this.newTodo;
    todo.isCompleted = true;
    this.todos.push(todo);
    this.newTodo = '';
    this.inputEmpty = false; // Reset the inputEmpty flag
    } else {
      this.inputEmpty = true; // Set the inputEmpty flag
    }
  }

  toEdit(id: number) {
    this.todos.forEach((todo, index) => {
      if (index === id) {
        todo.edit = true;
      }
      else {
        todo.edit = false;
      }
    });
    this.inputEmpty = false; // Reset the inputEmpty flag
  }

  saveEdit(id: number) {
    this.todos[id].edit = false;
  }

  done(id: number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo, index) => index !== id);
  }
  
}
