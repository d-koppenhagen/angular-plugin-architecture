import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationItemDatetimepickerComponent } from './configuration-item-datetimepicker.component';

describe('ConfigurationItemDatetimepickerComponent', () => {
  let component: ConfigurationItemDatetimepickerComponent;
  let fixture: ComponentFixture<ConfigurationItemDatetimepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationItemDatetimepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationItemDatetimepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
