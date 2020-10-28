import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaSideNavComponent } from './ada-side-nav.component';

describe('AdaSideNavComponent', () => {
  let component: AdaSideNavComponent;
  let fixture: ComponentFixture<AdaSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdaSideNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
