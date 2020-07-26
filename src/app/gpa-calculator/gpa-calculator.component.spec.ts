import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpaCalculatorComponent } from './gpa-calculator.component';

describe('GpaCalculatorComponent', () => {
  let component: GpaCalculatorComponent;
  let fixture: ComponentFixture<GpaCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpaCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpaCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
