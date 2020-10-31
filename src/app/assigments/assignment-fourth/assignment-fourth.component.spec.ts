import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentFourthComponent } from './assignment-fourth.component';

describe('AssignmentFourthComponent', () => {
  let component: AssignmentFourthComponent;
  let fixture: ComponentFixture<AssignmentFourthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentFourthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
