import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo, initializeTodos, removeTodo } from './store/actions';
import { selectRandomTodo, selectTodos } from './store/selector';
import { Todo } from './store/todos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private store: Store<{ todos: Todo[] }>) { }

  public ngOnInit(): void {
    this.store.select(selectTodos).subscribe((todos) => {
      this.todos = todos;
    });

    this.store.select(selectRandomTodo).subscribe((todo) => {
      this.randomTodo = todo;
    });

    // Action to initialize data
    this.store.dispatch(initializeTodos());
  }

  public todos: Todo[] = [];
  public randomTodo: Todo | undefined;

  public addNewItem(value: string) {
    this.store.dispatch(addTodo({ value }));
  }

  public removeItem(id: number) {
    this.store.dispatch(removeTodo({ id }));
  }
}
