import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTDetailPage } from './c-t-detail.page';

describe('CTDetailPage', () => {
  let component: CTDetailPage;
  let fixture: ComponentFixture<CTDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CTDetailPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CTDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
