import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from './services/api.service';
import { FileNode } from './models/FileNode';
import { Subject } from 'rxjs';
import { By } from '@angular/platform-browser';
import { AdaSidePanelComponent } from './components/side-panel/ada-side-panel.component';
import { AdaDetailsComponent } from './components/details/ada-details.component';
import Spy = jasmine.Spy;

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let apiService: ApiService;
  let fileNodesSubject: Subject<FileNode[]>;
  let apiSpy: Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientTestingModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    apiService = TestBed.inject(ApiService);
    fileNodesSubject = new Subject();
    apiSpy = spyOn(apiService, 'getNodes').and.returnValue(fileNodesSubject.asObservable());

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    if (fileNodesSubject) {
      fileNodesSubject.complete();
      fileNodesSubject = null;
    }
    apiSpy.calls.reset();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a side panel', () => {
    const adaSidePanelComponent: AdaSidePanelComponent = fixture.debugElement.query(By.css('app-side-panel')).componentInstance;
    expect(adaSidePanelComponent).not.toBeNull();
  });

  it('should have a details view panel', () => {
    const adaDetailsComponent: AdaDetailsComponent = fixture.debugElement.query(By.css('app-details')).componentInstance;
    expect(adaDetailsComponent).not.toBeNull();
  });

  it('should get get nodes on init', async () => {
    const fileNodes: FileNode[] = getNodes();

    fileNodesSubject.next(fileNodes);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(apiSpy).toHaveBeenCalledTimes(1);
  });


  function getNodes(): FileNode[] {
    return [{id: '1', title: 'test1'}, {id: '2', title: 'test2'}, {id: '3', title: 'test3'}];
  }

});
