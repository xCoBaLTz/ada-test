import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdaSidePanelComponent } from './ada-side-panel.component';

describe('AdaSideNavComponent', () => {
  let component: AdaSidePanelComponent;
  let fixture: ComponentFixture<AdaSidePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdaSidePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
