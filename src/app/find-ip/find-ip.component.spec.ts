import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindIpComponent } from './find-ip.component';

describe('FindIpComponent', () => {
  let component: FindIpComponent;
  let fixture: ComponentFixture<FindIpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindIpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
