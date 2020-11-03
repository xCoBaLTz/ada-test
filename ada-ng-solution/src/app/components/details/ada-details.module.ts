import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdaDetailsComponent } from './ada-details.component';
import { AdaDetailCardModule } from '../detail-card/ada-detail-card.module';


@NgModule({
  declarations: [AdaDetailsComponent],
  exports: [
    AdaDetailsComponent
  ],
  imports: [
    CommonModule,
    AdaDetailCardModule
  ]
})
export class AdaDetailsModule {
}
