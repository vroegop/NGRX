import { createReducer, on } from '@ngrx/store';
import { addTodo, removeTodo } from './actions';
import { Todo } from './todos.model';

// This is our state. Initially an empty array. Retrieve in our component like this: store.select('todos');
export const todos: Todo[] = [];

export const todoReducer = createReducer(
    todos,
    // Action, State and finally Action Parameters (props) destructured.
    on(addTodo, (state, { value }) => (
        // We always return a new object, never state.push, because state is immutable.
        [
            // First add the old state to the new state
            ...state,
            // Then add the new value
            {
                id: Math.floor(Math.random() * Date.now()),
                value
            }
        ]
    )),
    on(removeTodo, (state, { id }) => (
        // We always return a new object, never state.push, because state is immutable
        [
            // Add the old state to the new state. Filter doesn't alter the original array so we can safely use it.
            ...state.filter(todo => todo.id !== id)
        ]
    )),
);