import {Component, Input} from '@angular/core';
import {Task} from "../../models/task.model";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
@Input('taskData') taskData: Task | undefined;
}
