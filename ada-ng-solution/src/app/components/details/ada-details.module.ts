import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdaDetailsComponent } from './ada-details.component';
import { DetailCardModule } from '../detail-card/detail-card.module';


@NgModule({
  declarations: [AdaDetailsComponent],
  exports: [
    AdaDetailsComponent
  ],
  imports: [
    CommonModule,
    DetailCardModule
  ]
})
export class AdaDetailsModule {
}
