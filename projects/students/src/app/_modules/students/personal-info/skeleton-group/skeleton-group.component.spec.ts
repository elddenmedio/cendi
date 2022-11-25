import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonGroupComponent } from './skeleton-group.component';

describe('SkeletonGroupComponent', () => {
  let component: SkeletonGroupComponent;
  let fixture: ComponentFixture<SkeletonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
