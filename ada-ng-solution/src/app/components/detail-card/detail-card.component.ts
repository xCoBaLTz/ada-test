import { Component, Input } from '@angular/core';
import { Content } from '../../models/Content';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent {

  @Input()
  public content: Content;

  constructor() {
  }

}
