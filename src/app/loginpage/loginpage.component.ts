import { Component, OnInit } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

interface sessionUser {
  name: string,
  id: number
}

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})

export class LoginpageComponent implements OnInit {
  ngOnInit(): void {
  }
  sessionType?: number;
  sessionUser?: sessionUser;
  sessionTable?: number;

  setType(num: number){
    this.sessionType = num;
  }
  setUser(su: sessionUser){
    this.sessionUser= su;
  }

  users: sessionUser[] =[{"name": "Tom", id: 1},
   {"name": "Bob", id: 2},
    {"name": "Sam", id: 3},
     {"name": "Bill", id: 4}
    ];
  dropdownUsers = false;
  dropdownNumbers = false;

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
    waitingForSecondOperand: false
  };

  inputDigit(digit: any) {
    const { displayValue, waitingForSecondOperand } = this.calculator;
  
    if (waitingForSecondOperand === true) {
      this.calculator.displayValue = digit;
      this.calculator.waitingForSecondOperand = false;
    } else {
     if (displayValue === 'Wybierz stolik' ||  displayValue === '0')
     {
      this.calculator.displayValue ='' + digit;
      this.sessionTable = digit;
     }
     else
     {
      var toadd = displayValue + digit;
      this.calculator.displayValue = '' + toadd;
      this.sessionTable = +toadd;
     }
    }
  }

  resetCalculator() {
    this.calculator.displayValue = 'Wybierz stolik';
    this.sessionTable = undefined;
    this.calculator.waitingForSecondOperand = false;
  }
  
  submit() {
    // let session: DmSession = {
    //   workerId: this.sessionUser,
    //   assemblyTableId: this.sessionType,
    //   assemblyTableOperationModeId: this.sessionTable
    // };
    // alert(DmSessionToJSON(session));
  }
}