import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {
  checked:boolean = false;
  @Input('toggleText') toggleText: string = 'Show Done';
  @Output('status') status = new EventEmitter();


  onChange(event: any) {
   if (event) {
     const checked = event.checked;
     this.status.emit(checked);
   }
  }
}
