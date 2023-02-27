import { createFeature, createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo } from './todos.model';
 
export interface AppState {
  todos: Todo[];
}

export const selectTodos = createFeatureSelector<Todo[]>('todos');
 
export const selectRandomTodo = createSelector(
  selectTodos,
  (todos: Todo[]) => {
    console.log(todos);
    return todos[Math.floor(Math.random() * todos.length)]
  }
);