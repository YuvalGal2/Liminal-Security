import {Component, Input} from '@angular/core';
import {Task} from "../../models/task.model";
import {AppService} from "../../services/app.service";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
@Input('taskData') taskData: Task | undefined;
  constructor(private appService: AppService) {}
  openEditMode() {
    this.appService.updateFormState({state:true, data: this.taskData});

  }
}
