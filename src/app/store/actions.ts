import { createAction, props } from '@ngrx/store';

export const addTodo = createAction('[todo] add', props<{ value: string }>());
export const removeTodo = createAction('[todo] remove', props<{ id: number }>());