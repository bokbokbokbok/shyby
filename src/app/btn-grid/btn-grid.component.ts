import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface GridItem {
  id: number;
  code: string;
  activeTables: number;
  allTables: number;
  lastShiftPerformance: number;
  lastHourPerformance: number;
  minuteBalance: number;
  averagePerformance: number;
};

interface GridBottom {
  id: number;
  completed: number;
  plan: number;
};

export const dataUrl = {
  statsRows: 'http://localhost:5000/webapi/DmTV/all/',
  bottomRow: 'http://localhost:5000/webapi/DmTVPlan/all/',
};

@Component({
  selector: 'app-btn-grid',
  templateUrl: './btn-grid.component.html',
  styleUrls: ['./btn-grid.component.css']
})

export class BtnGridComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.http.get<Array<GridItem>>(dataUrl.statsRows).subscribe(dataItems => {
      this.items = dataItems;
    });
    this.http.get<Array<GridBottom>>(dataUrl.bottomRow).subscribe(dataBottom => {
      this.btw = dataBottom[0];
    });
    window.setTimeout(() => { this.getData(); }, 5000);
  }
  
  items: Array<GridItem>;

  btw: GridBottom;

  addSign(num: number) {
    return num < 0 ? num + "" : "+" + num;
  }
  bColor(num: number) {
        return num < 0 ? "redText" : "greenText";
    }
    wColor(num: number) {
      return num < 100 ? "redText" : "greenText";
  }
  
}


