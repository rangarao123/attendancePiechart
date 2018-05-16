import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignStudentToClassComponent } from './assign-student-to-class.component';

describe('AssignStudentToClassComponent', () => {
  let component: AssignStudentToClassComponent;
  let fixture: ComponentFixture<AssignStudentToClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignStudentToClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignStudentToClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
