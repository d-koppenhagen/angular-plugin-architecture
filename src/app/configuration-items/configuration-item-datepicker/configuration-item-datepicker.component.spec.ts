import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationItemDatepickerComponent } from './configuration-item-datepicker.component';

describe('ConfigurationItemDatepickerComponent', () => {
  let component: ConfigurationItemDatepickerComponent;
  let fixture: ComponentFixture<ConfigurationItemDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationItemDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationItemDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
