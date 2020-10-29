import { Component, Input, OnInit } from '@angular/core';
import { Nodes } from '../../models/Nodes';

@Component({
  selector: 'ada-details',
  templateUrl: './ada-details.component.html',
  styleUrls: ['./ada-details.component.scss']
})
export class AdaDetailsComponent implements OnInit {

  @Input()
  public value: Nodes;

  constructor() {
  }

  public ngOnInit(): void {

  }

}
