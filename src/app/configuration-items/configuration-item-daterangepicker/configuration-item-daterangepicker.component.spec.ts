import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationItemDaterangepickerComponent } from './configuration-item-daterangepicker.component';

describe('ConfigurationItemDaterangepickerComponent', () => {
  let component: ConfigurationItemDaterangepickerComponent;
  let fixture: ComponentFixture<ConfigurationItemDaterangepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationItemDaterangepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationItemDaterangepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
