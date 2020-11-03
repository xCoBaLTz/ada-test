import { Component, Input } from '@angular/core';
import { Content } from '../../models/Content';

@Component({
  selector: 'app-detail-card',
  templateUrl: './ada-detail-card.component.html',
  styleUrls: ['./ada-detail-card.component.scss']
})
export class AdaDetailCardComponent {

  @Input()
  public content: Content;

  constructor() {
  }

}
