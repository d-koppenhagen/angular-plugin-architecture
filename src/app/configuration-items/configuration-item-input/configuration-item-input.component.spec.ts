import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationItemInputComponent } from './configuration-item-input.component';

describe('ConfigurationItemInputComponent', () => {
  let component: ConfigurationItemInputComponent;
  let fixture: ComponentFixture<ConfigurationItemInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationItemInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationItemInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
