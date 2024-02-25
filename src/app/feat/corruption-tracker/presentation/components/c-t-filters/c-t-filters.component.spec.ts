import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTFiltersComponent } from './c-t-filters.component';

describe('CTFiltersComponent', () => {
  let component: CTFiltersComponent;
  let fixture: ComponentFixture<CTFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CTFiltersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CTFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
