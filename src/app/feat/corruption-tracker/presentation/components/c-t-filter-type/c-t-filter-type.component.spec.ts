import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTFilterTypeComponent } from './c-t-filter-type.component';

describe('CTFilterTypeComponent', () => {
  let component: CTFilterTypeComponent;
  let fixture: ComponentFixture<CTFilterTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CTFilterTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CTFilterTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
