import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiStudentComponent } from './kpi-student.component';

describe('KpiStudentComponent', () => {
  let component: KpiStudentComponent;
  let fixture: ComponentFixture<KpiStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KpiStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KpiStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
