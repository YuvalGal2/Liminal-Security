import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Output('emitFilterChange') emitFilterChange = new EventEmitter();
  onToggleChanged(status:string) {
    this.emitFilterChange.emit(['toggle',status]);
  }
}
