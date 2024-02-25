import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTFooterComponent } from './c-t-footer.component';

describe('CTFooterComponent', () => {
  let component: CTFooterComponent;
  let fixture: ComponentFixture<CTFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CTFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CTFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
