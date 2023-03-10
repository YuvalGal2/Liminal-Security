import {Component, OnDestroy, OnInit} from '@angular/core';
import {TasksService} from "../services/tasks.service";
import {Task} from "../models/task.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})

export class TasksListComponent implements OnInit, OnDestroy {
  constructor(private tasksService: TasksService) {}
  subArr: Subscription[] | undefined;
  showAlsoCompleted: boolean = false;
  message: string = 'No Tasks at the moment, You can add one via the API or with the interface!';
  taskList: Task[] = [];
  taskListShadow: Task[] = [];
  search:string = "";

  ngOnInit() {
    // get the data
    this.getData();
    this.subscribeToReUpdate();
  }
  private getData() {
   const sub = this.tasksService.getList().subscribe((res: any) => {
      console.log(res);
      // get the data and assign it as is.
      this.taskList = res;
      // filter the data according to the default selected status of the toggle
      // removes / leave the Done status tasks.
      res = this.filterData(res)
      // update the state of the app.
      this.tasksService.updateTasks(res);
      // update the shadow copy.
      this.subscribeToListChanges();
    });
   this.subArr?.push(sub);
  }
  private subscribeToListChanges() {
    const sub = this.tasksService.listUpdateSub.subscribe((payload: any) => {
      if (payload) {
        this.taskListShadow = payload;
        console.log(this.taskListShadow);
      }
    });
    this.subArr?.push(sub);
  }

  // some actions from external components might require this component to get updated again.
  private subscribeToReUpdate() {
    const sub =this.tasksService.filterSub.subscribe((obs: any) => {
      if (obs) {
        this.getData();
      }
    });
    this.subArr?.push(sub);
  }
  private filterData(payload: Task[], forceEmit = false) {
    payload = payload.filter((task: Task) => {
      // case search is existing
      if (this.search.length > 0 && !task.title.toLowerCase().includes(this.search.toLowerCase())) {
        return false;
      }
      // case completed is marked / unmarked.
      if (this.showAlsoCompleted) {
        return task;
      } else {
        return task.status !== "Done";
      }
    });
    // if you want to force the update of the service observable, make sure to maintain the state.
    if (forceEmit) {
      return this.tasksService.updateTasks(payload);
    }
    return payload;
  }

  handleFilterChange(event: any) {
    // route the filter request.
    if (event.length > 0) {
      switch (event[0]) {
        case "toggle":
          this.showAlsoCompleted = event[1];
          break;
        case "search":
          this.search = event[1];
          break;
      }
    }
    this.filterData(this.taskList, true);
  }

  ngOnDestroy() {
    this.subArr?.forEach((sub:Subscription) => {
      sub.unsubscribe();
    })
  }
}
