import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterOneComponent} from '../routings/routerOne.component';
import {RouterTwoComponent} from '../routings/routerTwo.component';
import {RouterThreeComponent} from '../routings/routerThree.component';



@NgModule({
  declarations: [
    AppComponent,
    RouterOneComponent,
    RouterTwoComponent,
    RouterThreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
