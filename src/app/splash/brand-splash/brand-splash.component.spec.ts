import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandSplashComponent } from './brand-splash.component';

describe('BrandSplashComponent', () => {
  let component: BrandSplashComponent;
  let fixture: ComponentFixture<BrandSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandSplashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
