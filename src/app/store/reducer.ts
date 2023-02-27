import { createReducer, on } from '@ngrx/store';
import { addTodo, initializeTodosSuccess, removeTodo } from './actions';
import { Todo } from './todos.model';

export const todos: Todo[] = [];

export const todoReducer = createReducer(
    todos,
    on(addTodo, (state, { value }) => ([
        ...state,
        {
            id: Math.floor(Math.random() * Date.now()),
            value
        }
    ])),
    on(removeTodo, (state, { id }) => ([
        ...state.filter(todo => todo.id !== id)
    ])),
    // Handle action that is triggered by the successfull effect
    on(initializeTodosSuccess, (state, { todos }) => ([
        ...state,
        ...todos,
    ]))
);