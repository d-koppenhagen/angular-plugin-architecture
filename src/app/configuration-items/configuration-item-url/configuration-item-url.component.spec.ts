import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationItemUrlComponent } from './configuration-item-url.component';

describe('ConfigurationItemUrlComponent', () => {
  let component: ConfigurationItemUrlComponent;
  let fixture: ComponentFixture<ConfigurationItemUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationItemUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationItemUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
