import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'btn-group',
  template: `
  <div [ngClass]="'btn-group-' + to.btnAlignment" role="group">
    <div>
    <button [type]="to.type" [ngClass]="'btn btn-secondary'" (click)="onClick($event)">
        {{ to.text }}
      </button>
      <button [type]="to.type" [ngClass]="'btn btn-secondary'" (click)="onClick($event)">
        {{ to.text }}
      </button>
      <button [type]="to.type" [ngClass]="'btn btn-secondary'" (click)="onClick($event)">
        {{ to.text }}
      </button>
    </div>
    </div>
  `,
})
export class BtnGroup extends FieldType {
  onClick($event) {
    if (this.to.onClick) {
      this.to.onClick($event);
    }
  }
}