import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  formObs = new BehaviorSubject({state:false,data:null});
  constructor() { }

  updateFormState(stateObject: any) {
    this.formObs.next(stateObject);
  }
}
