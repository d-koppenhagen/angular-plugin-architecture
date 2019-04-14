import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationItemSelectComponent } from './configuration-item-select.component';

describe('ConfigurationItemSelectComponent', () => {
  let component: ConfigurationItemSelectComponent;
  let fixture: ComponentFixture<ConfigurationItemSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationItemSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationItemSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
