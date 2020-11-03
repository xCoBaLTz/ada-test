import { Component, Input } from '@angular/core';
import { FileNodeDetails } from '../../models/FileNodeDetails';

@Component({
  selector: 'app-details',
  templateUrl: './ada-details.component.html',
  styleUrls: ['./ada-details.component.scss']
})
export class AdaDetailsComponent {

  @Input()
  public selectedNode: FileNodeDetails;

  constructor() {
  }

}
