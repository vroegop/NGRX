import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should add new item to the list', () => {
    const initialValue = app.todos.length;
    app.addNewItem('item 1');
    expect(app.todos.length).toBe(initialValue + 1);
    expect(app.todos[initialValue].value).toBe('item 1');
  });

  it('should add multiple items to the list', () => {
    const initialValue = app.todos.length;
    app.addNewItem('item 1');
    app.addNewItem('item 2');
    app.addNewItem('item 3');
    expect(app.todos.length).toBe(initialValue + 3);
    expect(app.todos[initialValue].value).toBe('item 1');
    expect(app.todos[initialValue + 1].value).toBe('item 2');
    expect(app.todos[initialValue + 2].value).toBe('item 3');
  });

  it('should remove an item from the list', () => {
    app.addNewItem('item 1');
    app.addNewItem('item 2');
    expect(app.todos.length).toBe(2);
    const itemToRemove = app.todos[0];
    app.removeItem(itemToRemove.id);
    expect(app.todos.length).toBe(1);
    expect(app.todos[0].value).toBe('item 2');
  });

  it('should not remove any items if the id is not found', () => {
    app.addNewItem('item 1');
    app.addNewItem('item 2');
    const initialValue = app.todos.length;
    app.removeItem(12345);
    expect(app.todos.length).toBe(initialValue);
  });
});
