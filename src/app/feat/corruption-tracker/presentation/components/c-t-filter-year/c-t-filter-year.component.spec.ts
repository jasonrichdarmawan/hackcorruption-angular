import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTFilterYearComponent } from './c-t-filter-year.component';

describe('CTFilterYearComponent', () => {
  let component: CTFilterYearComponent;
  let fixture: ComponentFixture<CTFilterYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CTFilterYearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CTFilterYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
