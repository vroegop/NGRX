import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { initializeTodos, initializeTodosSuccess } from './actions';

@Injectable()
export class TodoEffects {
    loadTodos$ = createEffect(() => this.actions$.pipe(
        // Effects are triggered by actions
        ofType(initializeTodos),
        // HTTP request here, mockdata for now
        map(() => initializeTodosSuccess({ todos: mockData }))
        // Returns an action with the data retrieved
    ));

    constructor(
        private actions$: Actions
      ) {}
}

const mockData = [
    { id: 1, value: 'NGRX Workshop' },
    { id: 2, value: 'Afscheidsborrel' },
    { id: 3, value: 'Release/6.5' },
]