import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todosArray = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTodos(newTodo: string) {

    if (newTodo) {
      this.todosArray.push({ newTodo, completed: false });
    }

  }

  removeTodo (index: number) {

    if (index > -1) {

      this.todosArray.splice(index, 1);

    }

  }
  
  isCompleted (index: number) {
    this.todosArray.find(todo => {
      if (index > -1) {
        console.log(todo.completed = true)
      }
    })
    // console.log('ishladi')
  }
}
