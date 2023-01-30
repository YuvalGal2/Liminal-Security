import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-list-message',
  templateUrl: './list-message.component.html',
  styleUrls: ['./list-message.component.scss']
})
export class ListMessageComponent {
  @Input('listMessage') listMessage: string | undefined;
}
