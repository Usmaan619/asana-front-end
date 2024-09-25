import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhaiPayComponent } from './bhai-pay.component';

describe('BhaiPayComponent', () => {
  let component: BhaiPayComponent;
  let fixture: ComponentFixture<BhaiPayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BhaiPayComponent]
    });
    fixture = TestBed.createComponent(BhaiPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
