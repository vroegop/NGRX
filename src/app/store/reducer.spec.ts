import { addTodo, initializeTodosSuccess, removeTodo } from './actions';
import { Todo } from './todos.model';
import { todoReducer } from './reducer';

describe('Todo Reducer', () => {
  it('should add a new todo item', () => {
    const initialState: Todo[] = [];
    const newTodo: Todo = { id: 1, value: 'Buy groceries' };

    const newState = todoReducer(initialState, addTodo({ value: newTodo.value }));

    expect(newState.length).toEqual(1);
    expect(newState[0]).toEqual({ ...newTodo, id: newState[0].id });
  });

  it('should remove a todo item', () => {
    const initialState: Todo[] = [
      { id: 1, value: 'Buy groceries' },
      { id: 2, value: 'Do laundry' },
      { id: 3, value: 'Walk the dog' }
    ];

    const idToRemove = 2;
    const newState = todoReducer(initialState, removeTodo({ id: idToRemove }));

    expect(newState.length).toEqual(2);
    expect(newState.find(todo => todo.id === idToRemove)).toBeUndefined();
  });

  it('should initialize the list of todos', () => {
    const initialState: Todo[] = [
      { id: 1, value: 'Buy groceries' },
      { id: 2, value: 'Do laundry' }
    ];

    const todosToInitialize: Todo[] = [
      { id: 3, value: 'Walk the dog' },
      { id: 4, value: 'Take out the trash' }
    ];

    const newState = todoReducer(initialState, initializeTodosSuccess({ todos: todosToInitialize }));

    expect(newState.length).toEqual(4);
    expect(newState).toEqual([...initialState, ...todosToInitialize]);
  });

  it('should return the default state if an unknown action is provided', () => {
    const initialState: Todo[] = [
      { id: 1, value: 'Buy groceries' },
      { id: 2, value: 'Do laundry' }
    ];

    const newState = todoReducer(initialState, { type: 'UNKNOWN_ACTION' } as any);

    expect(newState).toEqual(initialState);
  });
});