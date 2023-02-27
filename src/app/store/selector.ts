import { createSelector } from '@ngrx/store';
import { Todo } from './todos.model';
 
export interface AppState {
  todos: Todo[];
}
 
export const selectTodos = (state: AppState) => state.todos;
 
export const selectRandomTodo = createSelector(
  selectTodos,
  (todos: Todo[]) => todos[Math.floor(Math.random() * todos.length)]
);