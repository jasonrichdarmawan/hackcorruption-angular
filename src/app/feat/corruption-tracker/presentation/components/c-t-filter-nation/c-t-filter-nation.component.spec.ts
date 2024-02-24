import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTFilterNationComponent } from './c-t-filter-nation.component';

describe('CTFilterNationComponent', () => {
  let component: CTFilterNationComponent;
  let fixture: ComponentFixture<CTFilterNationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CTFilterNationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CTFilterNationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
