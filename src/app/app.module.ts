import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { LoginButton } from './login-button';
import { BtnGroup } from './btn-group';
import { NameSidebar } from './name-sidebar';

@NgModule({
  declarations: [
    AppComponent, LoginButton, BtnGroup
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'button',
          component: LoginButton,
          wrappers: ['form-field'],
          defaultOptions: {
            templateOptions: {
              btnType: 'default',
              type: 'button',
            },
          },
        },
        {
          name: 'btngroup',
          component: BtnGroup,
          wrappers: ['form-field'],
          defaultOptions: {
            templateOptions: {
              btnType: 'default',
              type: 'button',
            },
          },
        },
      ],
    }),
    FormlyBootstrapModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
