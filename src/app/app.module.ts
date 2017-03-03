import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.component';
import { AboutComponent }  from './components/about.component';
import {routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing, HttpModule],
  declarations: [ AppComponent, AboutComponent, UserComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
