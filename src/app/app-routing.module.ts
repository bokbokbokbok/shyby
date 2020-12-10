import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AppComponent } from './app.component';

const appRoutes: Routes =[
  { path: '', component: AppComponent},
  { path: 'main', component: MainpageComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)  
  ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
