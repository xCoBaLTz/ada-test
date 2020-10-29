import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaDetailsComponent } from './ada-details.component';

describe('DetailsComponent', () => {
  let component: AdaDetailsComponent;
  let fixture: ComponentFixture<AdaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdaDetailsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
