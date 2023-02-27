import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { Todo } from './store/todos.model';
import { addTodo, removeTodo } from './store/actions';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let store: MockStore<{ 'todos': Todo[] }>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        AppComponent,
      ],
      providers: [
        provideMockStore({
          selectors: [{selector: 'todos', value: []}]
        }),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with an empty todos list', () => {
    expect(component.todos).toEqual([]);
  });

  it('should trigger the addTodo action properly', () => {
    const dispatchSpy = spyOn(store, 'dispatch').and.callThrough();

    component.addNewItem('advitrae');

    expect(dispatchSpy).toHaveBeenCalledWith(addTodo({ value: 'advitrae' }));
  });

  it('should trigger the removeTodo action properly', () => {
    const dispatchSpy = spyOn(store, 'dispatch').and.callThrough();

    component.removeItem(1);

    expect(dispatchSpy).toHaveBeenCalledWith(removeTodo({ id: 1 }));
  });

  it('should show todos if the store has them', () => {
    // Override selector to see if its values reflect in the component
    store.overrideSelector('todos', [ { id: 1, value: 'advitrae' } ]);
    store.refreshState();

    // After overriding trigger ngOnInit
    fixture.detectChanges();

    expect(component.todos).toEqual([{ id: 1, value: 'advitrae' }]);
  });
});