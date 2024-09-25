import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorsComponent } from './investors.component';

describe('InvestorsComponent', () => {
  let component: InvestorsComponent;
  let fixture: ComponentFixture<InvestorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestorsComponent]
    });
    fixture = TestBed.createComponent(InvestorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
