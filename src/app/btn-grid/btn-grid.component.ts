import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-grid',
  templateUrl: './btn-grid.component.html',
  styleUrls: ['./btn-grid.component.css']
})
export class BtnGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  items: {
    type: string,
    section: string,
    zmiana: number,
    ostatnia: number,
    balance: number,
    wyjdanisc: number
  }[] = [
      { "type": "OW", "section": "2/4", "zmiana": 99, "ostatnia": 101, "balance": 12, "wyjdanisc": 102 },
      { "type": "PR", "section": "3/4", "zmiana": 93, "ostatnia": 99, "balance": 22, "wyjdanisc": 110 },
      { "type": "MO", "section": "8/12", "zmiana": 102, "ostatnia": 98, "balance": -5, "wyjdanisc": 89 }
    ];
  addSign(num: number) {
    return num < 0 ? num + "" : "+" + num;
  }
  bColor(num: number) {
        return num < 0 ? "redText" : "greenText";
    }
    wColor(num: number) {
      return num < 100 ? "redText" : "greenText";
  }
  BtmItems: {
    type: string,
    value: number
  }[] = [
      { "type": "WYKONANIE (szt)", "value": 128 },
      { "type": "PLAN (szt)", "value": 520 },
    ];
}
