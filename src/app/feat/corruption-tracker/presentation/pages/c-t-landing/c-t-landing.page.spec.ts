import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTLandingPage } from './c-t-landing.page';

describe('CTLandingPage', () => {
  let component: CTLandingPage;
  let fixture: ComponentFixture<CTLandingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CTLandingPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CTLandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
