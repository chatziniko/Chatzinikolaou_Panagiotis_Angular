import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import {RouterModule, Routes} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoggedInComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        {
            path: '',
            component: LoginFormComponent
        },
        {
            path: 'loggedin',
            component: LoggedInComponent
        }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
