import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeScreenComponent } from './home-screen/home-screen.component';
import { JsonFormatterComponent } from "./json-formatter/json-formatter.component";
import { FindIpComponent } from "./find-ip/find-ip.component";
import {GpaCalculatorComponent} from "./gpa-calculator/gpa-calculator.component";

const routes: Routes = [
  { path: 'json-formatter', component: JsonFormatterComponent },
  { path: 'find-ip', component: FindIpComponent },
  { path: 'gpa-calculator', component: GpaCalculatorComponent },
  { path: '', component: HomeScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
