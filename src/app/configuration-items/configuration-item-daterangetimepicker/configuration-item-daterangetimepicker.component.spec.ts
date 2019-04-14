import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationItemDaterangetimepickerComponent } from './configuration-item-daterangetimepicker.component';

describe('ConfigurationItemDaterangetimepickerComponent', () => {
  let component: ConfigurationItemDaterangetimepickerComponent;
  let fixture: ComponentFixture<ConfigurationItemDaterangetimepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationItemDaterangetimepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationItemDaterangetimepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
