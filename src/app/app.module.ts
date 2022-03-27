import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InputComponent } from './input/input.component';
import { CompletedComponent } from './completed/completed.component';

import { FormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: '',
    component: InputComponent
  },
  {
    path: 'completed',
    component: CompletedComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InputComponent,
    CompletedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
