import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaTitleTileComponent } from './ada-title-tile.component';

describe('TitleTileComponent', () => {
  let component: AdaTitleTileComponent;
  let fixture: ComponentFixture<AdaTitleTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdaTitleTileComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaTitleTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
