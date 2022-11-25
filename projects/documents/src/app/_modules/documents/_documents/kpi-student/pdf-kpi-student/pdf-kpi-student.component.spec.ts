import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfKpiStudentComponent } from './pdf-kpi-student.component';

describe('PdfKpiStudentComponent', () => {
  let component: PdfKpiStudentComponent;
  let fixture: ComponentFixture<PdfKpiStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfKpiStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfKpiStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
