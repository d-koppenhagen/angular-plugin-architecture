import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationItemTimepickerComponent } from './configuration-item-timepicker.component';

describe('ConfigurationItemTimepickerComponent', () => {
  let component: ConfigurationItemTimepickerComponent;
  let fixture: ComponentFixture<ConfigurationItemTimepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationItemTimepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationItemTimepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
