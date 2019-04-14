import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationItemSliderComponent } from './configuration-item-slider.component';

describe('ConfigurationItemSliderComponent', () => {
  let component: ConfigurationItemSliderComponent;
  let fixture: ComponentFixture<ConfigurationItemSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationItemSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationItemSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
