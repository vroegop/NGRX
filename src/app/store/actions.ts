import { createAction, props } from '@ngrx/store';

export const addTodo = createAction('[Counter Component] Increment', props<{ value: string }>());
export const removeTodo = createAction('[Counter Component] Decrement', props<{ id: number }>());