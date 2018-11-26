import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {RouterOneComponent} from '../routings/routerOne.component';
import {RouterTwoComponent} from '../routings/routerTwo.component';
import {RouterThreeComponent} from '../routings/routerThree.component';
import { AppRoutingModule } from './app-routing.module';
import { MyService } from '../services/my.service';



@NgModule({
  declarations: [
    AppComponent,
    RouterOneComponent,
    RouterTwoComponent,
    RouterThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
