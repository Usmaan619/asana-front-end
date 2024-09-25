import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorEmailVerificationComponent } from './investor-email-verification.component';

describe('InvestorEmailVerificationComponent', () => {
  let component: InvestorEmailVerificationComponent;
  let fixture: ComponentFixture<InvestorEmailVerificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestorEmailVerificationComponent]
    });
    fixture = TestBed.createComponent(InvestorEmailVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
