import {Component, Input, OnChanges} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {AppService} from "../services/app.service";
import {Task} from "../models/task.model";
import {TasksService} from "../services/tasks.service";
import {Observable} from "rxjs";

@Component({
  selector: 'item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnChanges{
  constructor(private appService: AppService, private tasksService: TasksService) {}
  @Input('data') data: Task | undefined = undefined;
  formStateObject: any = null;
  selectedOption: any;
  form: any = null;

  async saveFormData() {
    const obs: Observable<any>= await this.tasksService.upsertData(this.form.value);
    obs.subscribe((response) => {
    this.tasksService.updateTasks(response,true);
    })
  }

  closeForm(): void{
    this.appService.updateFormState({state:false,data:null});
  }
  ngOnChanges(): void{
      this.populateForm();
  }
  populateForm(): void {
    this.form = new FormGroup({
      _id: new FormControl(this.data?._id || ''),
      title: new FormControl(this.data?.title || ''),
      assignee: new FormControl( this.data?.assignee || ''),
      status: new FormControl( this.data?.status || ''),
    });
    console.log(this.form);
    this.selectedOption = this.data?.status;
  }
}
