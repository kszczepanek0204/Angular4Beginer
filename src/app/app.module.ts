import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { FormsModule } from '@angular/forms';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    WelcomeMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    Test1Component
  ]
})
export class AppModule { }
