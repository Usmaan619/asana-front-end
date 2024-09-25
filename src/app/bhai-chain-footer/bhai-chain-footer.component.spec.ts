import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhaiChainFooterComponent } from './bhai-chain-footer.component';

describe('BhaiChainFooterComponent', () => {
  let component: BhaiChainFooterComponent;
  let fixture: ComponentFixture<BhaiChainFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BhaiChainFooterComponent]
    });
    fixture = TestBed.createComponent(BhaiChainFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
