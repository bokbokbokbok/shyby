import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FieldFormExtension } from '@ngx-formly/core/lib/extensions/field-form/field-form';

@Component({
  selector: 'name-sidebar',
  template: `
      <div class="col m-3 bg-warning">
        sidebar
      </div>
  `,
})
export class NameSidebar extends FieldFormExtension {

}