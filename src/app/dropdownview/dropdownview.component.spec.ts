import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownviewComponent } from './dropdownview.component';

describe('DropdownviewComponent', () => {
  let component: DropdownviewComponent;
  let fixture: ComponentFixture<DropdownviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
