import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherregComponent } from './teacherreg.component';

describe('TeacherregComponent', () => {
  let component: TeacherregComponent;
  let fixture: ComponentFixture<TeacherregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
