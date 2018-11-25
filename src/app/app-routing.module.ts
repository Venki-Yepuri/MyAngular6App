import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RouterOneComponent} from '../routings/routerOne.component';
import {RouterTwoComponent} from '../routings/routerTwo.component';
import {RouterThreeComponent} from '../routings/routerThree.component';

const routes: Routes = [
  { path: '', redirectTo: '/rootOne', pathMatch: 'full' },
  { path: 'rootOne', component: RouterOneComponent },
  { path: 'rootTwo', component: RouterTwoComponent },
  { path: 'rootThree', component: RouterThreeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
