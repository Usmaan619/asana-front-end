import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeroPageComponent } from './home-hero-page.component';

describe('HomeHeroPageComponent', () => {
  let component: HomeHeroPageComponent;
  let fixture: ComponentFixture<HomeHeroPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeHeroPageComponent]
    });
    fixture = TestBed.createComponent(HomeHeroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
