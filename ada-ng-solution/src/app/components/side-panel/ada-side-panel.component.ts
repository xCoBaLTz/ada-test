import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileNode } from '../../models/FileNode';

@Component({
  selector: 'ada-side-panel',
  templateUrl: './ada-side-panel.component.html',
  styleUrls: ['./ada-side-panel.component.scss']
})
export class AdaSidePanelComponent implements OnInit {

  @Input()
  public values: FileNode[] = [];

  @Output()
  public titleClicked: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  public ngOnInit(): void {
  }

  public onClicked(id: string) {
    this.titleClicked.emit(id);
  }
}
