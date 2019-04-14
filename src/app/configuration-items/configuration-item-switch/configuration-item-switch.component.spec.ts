import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationItemSwitchComponent } from './configuration-item-switch.component';

describe('ConfigurationItemSwitchComponent', () => {
  let component: ConfigurationItemSwitchComponent;
  let fixture: ComponentFixture<ConfigurationItemSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationItemSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationItemSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
