import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  users =["Tom", "Bob", "Sam", "Bill"];
  
  fields: FormlyFieldConfig[] = [
    {
      type: 'button',
      templateOptions: {
        text: 'Wybierz stolik',
        btnType: 'white',
        onClick: ($event) => {
          this.form.get('someInput').setValue('clicked!');
        },
      },
    },
    {
      type: 'btngroup',
      templateOptions: {
        text: 'Stolik',
        btnAlignment: 'horizontal',
        btnType: 'white',
        onClick: ($event) => {
          this.form.get('someInput').setValue('clicked!');
        },
      },
    },
    {
      type: 'button',
      templateOptions: {
        text: 'Wybierz pracownika',
        btnType: 'white',
        onClick: ($event) => {
          this.form.get('someInput').setValue('clicked!');
        },
      },
    },
    {
      key: 'iLikeTwix',
      type: 'checkbox',
      templateOptions: {
        label: 'I like twix',
      },
      hideExpression: '!model.name',
    },
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }
}
