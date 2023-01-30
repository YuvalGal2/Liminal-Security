import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppService} from "./services/app.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  constructor(private appService: AppService) {}
  sub: Subscription | undefined;
  title = 'home-assignment';
  form: any = null;

  ngOnInit() {
    this.getFormState();
  }
  getFormState() {
    this.sub = this.appService.formObs.subscribe((stateObject: any) => this.form = stateObject );
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
