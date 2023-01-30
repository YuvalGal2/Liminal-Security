import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { TasksListComponent } from '../tasks-list/tasks-list.component';
import { ListItemComponent } from '../tasks-list/list-item/list-item.component';
import { ListMessageComponent } from '../tasks-list/list-message/list-message.component';
import {HttpClientModule} from "@angular/common/http";
import { ListItemControlComponent } from '../tasks-list/list-item/list-item-control/list-item-control.component';
import { FiltersComponent } from '../tasks-list/filters/filters.component';
import { SearchComponent } from '../tasks-list/filters/search/search.component';
import { ToggleComponent } from '../tasks-list/filters/toggle/toggle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ItemFormComponent } from '../item-form/item-form.component';
import { AddItemButtonComponent } from '../tasks-list/add-item-button/add-item-button.component';
import {MatSelectModule} from '@angular/material/select';
import {TasksService} from "../services/tasks.service";
@NgModule({
  declarations: [
    TasksListComponent,
    ListItemComponent,
    ListMessageComponent,
    ListItemControlComponent,
    FiltersComponent,
    SearchComponent,
    ToggleComponent,
    ItemFormComponent,
    AddItemButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent],
  exports: [ TasksListComponent,
    ListItemComponent,
    ListMessageComponent,
    ListItemControlComponent,
    FiltersComponent,
    SearchComponent,
    ToggleComponent,
    ItemFormComponent,
    AddItemButtonComponent]
})
export class TasksModule { }
