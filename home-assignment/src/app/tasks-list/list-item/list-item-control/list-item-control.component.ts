import {Component, Input} from '@angular/core';
import {Task} from "../../../models/task.model";
import {TasksService} from "../../../services/tasks.service";

@Component({
  selector: 'app-item-control',
  templateUrl: './list-item-control.component.html',
  styleUrls: ['./list-item-control.component.scss']
})
export class ListItemControlComponent {
  constructor(private tasksService: TasksService) {
  }

  @Input('itemData') itemData: any;
  softDeleteItem() {
    console.log('got here');
    this.tasksService.closeTask(this.itemData).subscribe((res: any) => {
      if (res) {
        this.tasksService.updateTasks(res);
      }
    })
  }

}
