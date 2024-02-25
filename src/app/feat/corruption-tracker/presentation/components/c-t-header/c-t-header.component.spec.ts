import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTHeaderComponent } from './c-t-header.component';

describe('CTHeaderComponent', () => {
  let component: CTHeaderComponent;
  let fixture: ComponentFixture<CTHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CTHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CTHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
