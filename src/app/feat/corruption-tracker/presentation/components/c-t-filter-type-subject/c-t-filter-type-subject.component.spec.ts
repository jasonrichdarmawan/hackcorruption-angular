import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTFilterTypeSubjectComponent } from './c-t-filter-type-subject.component';

describe('CTFilterTypeSubjectComponent', () => {
  let component: CTFilterTypeSubjectComponent;
  let fixture: ComponentFixture<CTFilterTypeSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CTFilterTypeSubjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CTFilterTypeSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
