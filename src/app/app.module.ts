import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { todoReducer } from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './store/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ todos: todoReducer }),
    EffectsModule.forRoot([TodoEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
