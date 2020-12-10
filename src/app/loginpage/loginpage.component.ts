import { Component, OnInit } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  ngOnInit(): void {
  }

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  users =["Tom", "Bob", "Sam", "Bill"];
  dropdownUsers = false;
  dropdownNumbers = false;
  
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

  toggledropdownNumbers() {
    this.dropdownUsers = false;
    this.dropdownNumbers = !this.dropdownNumbers;
  }

  toggledropdownUsers() {
    this.dropdownNumbers = false;
    this.dropdownUsers = !this.dropdownUsers;
  }

  calculator = {
    displayValue: 'Wybierz stolik',
    waitingForSecondOperand: false,
  };

  inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = this.calculator;
  
    if (waitingForSecondOperand === true) {
      this.calculator.displayValue = digit;
      this.calculator.waitingForSecondOperand = false;
    } else {
      this.calculator.displayValue = displayValue === 'Wybierz stolik' ||  displayValue === '0' ? '' + digit : '' + displayValue + digit;
    }
  }

  resetCalculator() {
    this.calculator.displayValue = 'Wybierz stolik';
    this.calculator.waitingForSecondOperand = false;
  }
  
  submit() {
    alert(JSON.stringify(this.model));
  }
}