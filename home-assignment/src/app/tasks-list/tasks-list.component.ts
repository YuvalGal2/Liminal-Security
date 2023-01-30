import {Component, OnInit} from '@angular/core';
import {TasksService} from "../services/tasks.service";
import {Task} from "../models/task.model";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})

export class TasksListComponent implements OnInit {
  constructor(private tasksService: TasksService) {}

  showAlsoCompleted: boolean = false;
  message: string = 'No Tasks at the moment, You can add one via the API or with the interface!';
  taskList: Task[] = [];

  ngOnInit() {
    this.getData();
  }
  private getData() {
    this.tasksService.getList().subscribe((res: any) => {
      this.tasksService.updateTasks(res);
      this.subscribeToListChanges();
    })
  }
  private subscribeToListChanges() {
    this.tasksService.listUpdateSub.subscribe((payload: any) => {

      if (payload) {
        payload = this.filterData(payload)
        console.log(payload);
        this.taskList = payload;
      }
    })
  }
  // TODO: add sub listenerToAllow filter + show completed
  private filterData(payload: Task[]) {
      if (!this.showAlsoCompleted) {
        payload = payload.filter((task: Task) =>  this.showAlsoCompleted ? task : task.status !== "Done")
      }
      return payload;
  }
}
