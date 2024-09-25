import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBhaiTokenComponent } from './admin-bhai-token.component';

describe('AdminBhaiTokenComponent', () => {
  let component: AdminBhaiTokenComponent;
  let fixture: ComponentFixture<AdminBhaiTokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBhaiTokenComponent]
    });
    fixture = TestBed.createComponent(AdminBhaiTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
