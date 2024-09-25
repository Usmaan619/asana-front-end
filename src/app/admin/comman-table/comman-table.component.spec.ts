import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommanTableComponent } from './comman-table.component';

describe('CommanTableComponent', () => {
  let component: CommanTableComponent;
  let fixture: ComponentFixture<CommanTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommanTableComponent]
    });
    fixture = TestBed.createComponent(CommanTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
