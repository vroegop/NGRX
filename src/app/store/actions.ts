import { createAction, props } from '@ngrx/store';
import { Todo } from './todos.model';

export const initializeTodos = createAction('[todo] init');
export const initializeTodosSuccess = createAction('[todo] init success', props<{ todos: Todo[] }>());

export const addTodo = createAction('[todo] add', props<{ value: string }>());
export const removeTodo = createAction('[todo] remove', props<{ id: number }>());