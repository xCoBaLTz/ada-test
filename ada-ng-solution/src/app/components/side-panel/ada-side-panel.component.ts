import { Component, Input, OnInit } from '@angular/core';
import { Nodes } from '../../models/Nodes';

@Component({
  selector: 'ada-side-panel',
  templateUrl: './ada-side-panel.component.html',
  styleUrls: ['./ada-side-panel.component.scss']
})
export class AdaSidePanelComponent implements OnInit {

  @Input()
  public values: Nodes[] = [];

  constructor() {
  }

  public ngOnInit(): void {
  }

}
