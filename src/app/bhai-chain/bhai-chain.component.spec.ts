import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhaiChainComponent } from './bhai-chain.component';

describe('BhaiChainComponent', () => {
  let component: BhaiChainComponent;
  let fixture: ComponentFixture<BhaiChainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BhaiChainComponent]
    });
    fixture = TestBed.createComponent(BhaiChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
