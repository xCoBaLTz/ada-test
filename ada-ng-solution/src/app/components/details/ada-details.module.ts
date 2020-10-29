import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdaDetailsComponent } from './ada-details.component';


@NgModule({
  declarations: [AdaDetailsComponent],
  exports: [
    AdaDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdaDetailsModule {
}
