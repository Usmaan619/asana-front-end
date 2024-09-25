import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySettingComponent } from './country-setting.component';

describe('CountrySettingComponent', () => {
  let component: CountrySettingComponent;
  let fixture: ComponentFixture<CountrySettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountrySettingComponent]
    });
    fixture = TestBed.createComponent(CountrySettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
