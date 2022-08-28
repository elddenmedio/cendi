import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNoResultsComponent } from './table-no-results.component';

describe('TableNoResultsComponent', () => {
  let component: TableNoResultsComponent;
  let fixture: ComponentFixture<TableNoResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableNoResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableNoResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
