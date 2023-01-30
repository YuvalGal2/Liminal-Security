import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppService} from "../../services/app.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-item-button',
  templateUrl: './add-item-button.component.html',
  styleUrls: ['./add-item-button.component.scss']
})
export class AddItemButtonComponent implements OnInit, OnDestroy{
  constructor(private appService: AppService) {}
  sub:Subscription | undefined;
  form:any =  null;
  updateFormState() {
    this.appService.updateFormState({state:true, data:null});
  }
  ngOnInit() {
    this.sub = this.appService.formObs.subscribe((formState:any) => {
      this.form= formState;
    })
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
