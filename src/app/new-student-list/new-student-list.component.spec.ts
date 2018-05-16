import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStudentListComponent } from './new-student-list.component';

describe('NewStudentListComponent', () => {
  let component: NewStudentListComponent;
  let fixture: ComponentFixture<NewStudentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStudentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
