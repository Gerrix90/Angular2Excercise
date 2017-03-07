import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms'

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.component';
import { AboutComponent }  from './components/about.component';
import { ProbaComponent }  from './components/proba.component';
import {routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing, HttpModule, FormsModule],
  declarations: [ AppComponent, AboutComponent, UserComponent, ProbaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
