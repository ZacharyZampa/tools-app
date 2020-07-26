import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpaCalculatorEditComponent } from './gpa-calculator-edit.component';

describe('GpaCalculatorEditComponent', () => {
  let component: GpaCalculatorEditComponent;
  let fixture: ComponentFixture<GpaCalculatorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpaCalculatorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpaCalculatorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
