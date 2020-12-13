import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { BtnGridComponent } from './btn-grid/btn-grid.component';

const appRoutes: Routes =[
  { path: '', component: LoginpageComponent},
  { path: 'grid', component: BtnGridComponent},
  { path: 'main', component: MainpageComponent},
  { path: '**', component: LoginpageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)  
  ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
