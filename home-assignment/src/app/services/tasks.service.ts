import { Injectable } from '@angular/core';
import { environment } from '.././../environments/environment';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Task} from "../models/task.model";
import {BehaviorSubject, Subject} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  apiUrl: string = `${environment.apiURL}/items`;
  listUpdateSub = new BehaviorSubject<any>(null);
  constructor(private httpClient: HttpClient) {}

  getList() {
    return this.httpClient.get(this.apiUrl);
  }
  closeTask(task: Task ) {
    if (task) {
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body:  {
          id: task._id
        }
      };
      return this.httpClient.delete(this.apiUrl,options);
    }
    else {
      throw Error('Please Supply valid details for soft delete');
    }
  }
  updateTasks(tasks: Task[]) {
    this.listUpdateSub.next(tasks);
  }
}

