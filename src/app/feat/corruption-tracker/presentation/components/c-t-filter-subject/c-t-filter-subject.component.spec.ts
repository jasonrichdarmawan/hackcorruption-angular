import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTFilterSubjectComponent } from './c-t-filter-subject.component';

describe('CTFilterSubjectComponent', () => {
  let component: CTFilterSubjectComponent;
  let fixture: ComponentFixture<CTFilterSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CTFilterSubjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CTFilterSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
