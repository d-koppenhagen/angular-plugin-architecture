import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationItemMessageboxComponent } from './configuration-item-messagebox.component';

describe('ConfigurationItemMessageboxComponent', () => {
  let component: ConfigurationItemMessageboxComponent;
  let fixture: ComponentFixture<ConfigurationItemMessageboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationItemMessageboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationItemMessageboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
