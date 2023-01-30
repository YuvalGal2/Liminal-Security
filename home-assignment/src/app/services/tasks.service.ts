import { Injectable } from '@angular/core';
import { environment } from '.././../environments/environment';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Task} from "../models/task.model";
import {BehaviorSubject, Observable, Subject} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  apiUrl: string = `${environment.apiURL}/items`;
  listUpdateSub = new BehaviorSubject<any>(null);
  filterSub = new BehaviorSubject<any>(null);
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
  updateTasks(tasks: Task[], requireNewFilter = false): void {
    this.listUpdateSub.next(tasks);
    if (requireNewFilter) {
      this.reFilter();
    }
  }
  reFilter(): void {
    this.filterSub.next(true);
  }
  upsertData(payload: Task) {
    if (payload?._id ) {
      return this.updateTask(payload);
    }
    else {
      return this.insertTask(payload);
    }
  }
  private async updateTask(payload: Task) {
    return this.httpClient.put(this.apiUrl,{payload:payload});
  }
  private async insertTask(payload: Task):Promise<any> {
    delete(payload._id);
    return this.httpClient.post(this.apiUrl, {payload:payload});
  }
}

