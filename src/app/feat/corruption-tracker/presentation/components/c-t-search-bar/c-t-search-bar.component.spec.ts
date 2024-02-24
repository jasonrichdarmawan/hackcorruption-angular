import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTSearchBarComponent } from './c-t-search-bar.component';

describe('CTSearchBarComponent', () => {
  let component: CTSearchBarComponent;
  let fixture: ComponentFixture<CTSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CTSearchBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CTSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
