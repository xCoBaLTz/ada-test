import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaDetailCardComponent } from './ada-detail-card.component';

describe('AdaDetailCardComponent', () => {
  let component: AdaDetailCardComponent;
  let fixture: ComponentFixture<AdaDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdaDetailCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
