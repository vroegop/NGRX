import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo, removeTodo } from './store/actions';
import { Todo } from './store/todos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private store: Store<{ todos: Todo[] }>) { }

  // Selectors in the ngOnInit instead of constructor for testing access
  public ngOnInit(): void {
    this.store.select('todos').subscribe((todos) => {
      this.todos = todos;
    });
  }

  public todos: Todo[] = [];

  // Allowing duplicates is a feature
  public addNewItem(value: string) {
    this.store.dispatch(addTodo({ value }));
  }

  public removeItem(id: number) {
    this.store.dispatch(removeTodo({ id }));
  }
}
