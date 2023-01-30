import {Component, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @ViewChild('search') search:any;
  @Output('searchValue') searchValue = new EventEmitter();
  onKeyPressed() {
    this.searchValue.emit(this.search.nativeElement.value);
  }
}
