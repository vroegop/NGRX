import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public todos: { id: number, value: string }[] = [];

  // Allowing duplicates is a feature
  public addNewItem(value: string) {
    const id = Math.floor(Math.random() * Date.now());
    this.todos = [ ...this.todos, { id, value } ];
  }

  public removeItem(id: number) {
    this.todos = this.todos.filter(item => item.id !== id);
  }
}
