import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileNode } from '../../models/FileNode';

@Component({
  selector: 'app-title-tile',
  templateUrl: './ada-title-tile.component.html',
  styleUrls: ['./ada-title-tile.component.scss']
})
export class AdaTitleTileComponent {

  @Input()
  public value: FileNode;

  @Input()
  public selected: boolean;

  @Output()
  public clicked: EventEmitter<string> = new EventEmitter();


  constructor() {
  }

  public onClick(): void {
    this.clicked.emit(this.value.id);
  }
}
