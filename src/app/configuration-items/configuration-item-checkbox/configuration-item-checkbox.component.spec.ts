import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationItemCheckboxComponent } from './configuration-item-checkbox.component';

describe('ConfigurationItemCheckboxComponent', () => {
  let component: ConfigurationItemCheckboxComponent;
  let fixture: ComponentFixture<ConfigurationItemCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationItemCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationItemCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
