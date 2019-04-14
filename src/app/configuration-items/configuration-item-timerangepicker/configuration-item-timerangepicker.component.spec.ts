import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationItemTimerangepickerComponent } from './configuration-item-timerangepicker.component';

describe('ConfigurationItemTimerangepickerComponent', () => {
  let component: ConfigurationItemTimerangepickerComponent;
  let fixture: ComponentFixture<ConfigurationItemTimerangepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationItemTimerangepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationItemTimerangepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
