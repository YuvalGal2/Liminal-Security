import {Component, OnInit} from '@angular/core';
import {AppService} from "./services/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private appService: AppService) {}
  title = 'home-assignment';
  form: any = null;

  ngOnInit() {
    this.getFormState();
  }
  getFormState() {
    this.appService.formObs.subscribe((stateObject: any) => this.form = stateObject );
  }
}
