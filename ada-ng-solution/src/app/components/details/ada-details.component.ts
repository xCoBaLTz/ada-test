import { Component, Input, OnInit } from '@angular/core';
import { FileNodeDetails } from '../../models/FileNodeDetails';

@Component({
  selector: 'ada-details',
  templateUrl: './ada-details.component.html',
  styleUrls: ['./ada-details.component.scss']
})
export class AdaDetailsComponent implements OnInit {

  @Input()
  public selectedNode: FileNodeDetails;

  constructor() {
  }

  public ngOnInit(): void {
  }

}
