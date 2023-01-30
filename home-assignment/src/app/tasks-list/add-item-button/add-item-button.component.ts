import {Component, OnInit} from '@angular/core';
import {AppService} from "../../services/app.service";

@Component({
  selector: 'app-add-item-button',
  templateUrl: './add-item-button.component.html',
  styleUrls: ['./add-item-button.component.scss']
})
export class AddItemButtonComponent implements OnInit{
  constructor(private appService: AppService) {}
  form:any =  null;
  updateFormState() {
    this.appService.updateFormState({state:true, data:null});
  }
  ngOnInit() {
    this.appService.formObs.subscribe((formState:any) => {
      this.form= formState;
    })
  }
}
