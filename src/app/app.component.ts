import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo, removeTodo } from './store/actions';
import { selectRandomTodo, selectTodos } from './store/selector';
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
    this.store.select(selectTodos).subscribe((todos) => {
      this.todos = todos;
    });

    this.store.select(selectRandomTodo).subscribe((todo) => {
      this.randomTodo = todo;
    });
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
