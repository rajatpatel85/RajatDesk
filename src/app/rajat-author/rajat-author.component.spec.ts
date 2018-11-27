import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RajatAuthorComponent } from './rajat-author.component';

describe('RajatAuthorComponent', () => {
  let component: RajatAuthorComponent;
  let fixture: ComponentFixture<RajatAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RajatAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RajatAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
