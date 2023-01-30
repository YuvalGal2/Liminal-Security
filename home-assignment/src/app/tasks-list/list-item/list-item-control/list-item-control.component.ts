import {Component, Input, OnDestroy} from '@angular/core';
import {Task} from "../../../models/task.model";
import {TasksService} from "../../../services/tasks.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-item-control',
  templateUrl: './list-item-control.component.html',
  styleUrls: ['./list-item-control.component.scss']
})
export class ListItemControlComponent implements OnDestroy {
  sub:Subscription|undefined;
  constructor(private tasksService: TasksService) {}

  @Input('itemData') itemData: any;
  softDeleteItem(): void {
    this.sub = this.tasksService.closeTask(this.itemData).subscribe((res: any) => {
      if (res) {
        this.tasksService.updateTasks(res,true);
      }
    })
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
