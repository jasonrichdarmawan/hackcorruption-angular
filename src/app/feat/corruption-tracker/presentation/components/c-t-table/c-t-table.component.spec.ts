import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTTableComponent } from './c-t-table.component';

describe('CTTableComponent', () => {
  let component: CTTableComponent;
  let fixture: ComponentFixture<CTTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CTTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CTTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
