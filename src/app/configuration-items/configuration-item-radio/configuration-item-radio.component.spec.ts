import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationItemRadioComponent } from './configuration-item-radio.component';

describe('ConfigurationItemRadioComponent', () => {
  let component: ConfigurationItemRadioComponent;
  let fixture: ComponentFixture<ConfigurationItemRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationItemRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationItemRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
