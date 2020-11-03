import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FileNode } from '../../models/FileNode';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'ada-side-panel',
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

  public query: string = '';
  public readonly queryInputDebounceTime: number = 300;

  constructor() {
  }

  public ngAfterViewInit(): void {
    this._listenToQueryInput();
  }

  public onClicked(id: string) {
    this.titleClicked.emit(id);
  }

  public _listenToQueryInput() {
    fromEvent(this.queryInput.nativeElement, 'input')
      .pipe(
        debounceTime(this.queryInputDebounceTime),
        map((event: Event) => (event.target as HTMLInputElement).value),
        distinctUntilChanged(null, (value) => value)
      )
      .subscribe((queryValue: string) => {
        console.log(queryValue);
        this.query = queryValue;
        this.searchChanged.emit(this.query);
      });
  }
}
