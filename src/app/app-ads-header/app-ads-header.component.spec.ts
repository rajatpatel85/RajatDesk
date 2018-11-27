import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdsHeaderComponent } from './app-ads-header.component';

describe('AppAdsHeaderComponent', () => {
  let component: AppAdsHeaderComponent;
  let fixture: ComponentFixture<AppAdsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAdsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
