import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FileNode } from '../../models/FileNode';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-side-panel',
  templateUrl: './ada-side-panel.component.html',
  styleUrls: ['./ada-side-panel.component.scss']
})
export class AdaSidePanelComponent implements AfterViewInit {

  @Input()
  public values: FileNode[] = [];

  @Output()
  public titleClicked: EventEmitter<string> = new EventEmitter();

  @Output()
  public searchChanged: EventEmitter<string> = new EventEmitter();

  @ViewChild('input')
  public queryInput: ElementRef;

  public query: string;
  public selectedTile: string;

  private readonly _queryInputDebounceTime: number = 300;

  constructor() {
  }

  public ngAfterViewInit(): void {
    this._listenToQueryInput();
  }

  public onClicked(id: string): void {
    this.selectedTile = id;
    this.titleClicked.emit(id);
  }

  private _listenToQueryInput(): void {
    fromEvent(this.queryInput.nativeElement, 'input')
      .pipe(
        debounceTime(this._queryInputDebounceTime),
        map((event: Event) => (event.target as HTMLInputElement).value),
        distinctUntilChanged(null, (value) => value)
      )
      .subscribe((queryValue: string) => {
        this.query = queryValue;
        this.selectedTile = '';
        this.searchChanged.emit(this.query);
      });
  }
}
