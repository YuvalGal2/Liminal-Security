import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemControlComponent } from './list-item-control.component';

describe('ListItemControlComponent', () => {
  let component: ListItemControlComponent;
  let fixture: ComponentFixture<ListItemControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListItemControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
