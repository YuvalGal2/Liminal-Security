import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { ListItemComponent } from './tasks-list/list-item/list-item.component';
import { ListMessageComponent } from './tasks-list/list-message/list-message.component';
import {HttpClientModule} from "@angular/common/http";
import { ListItemControlComponent } from './tasks-list/list-item/list-item-control/list-item-control.component';
import { FiltersComponent } from './tasks-list/filters/filters.component';
import { SearchComponent } from './tasks-list/filters/search/search.component';
import { ToggleComponent } from './tasks-list/filters/toggle/toggle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    ListItemComponent,
    ListMessageComponent,
    ListItemControlComponent,
    FiltersComponent,
    SearchComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
