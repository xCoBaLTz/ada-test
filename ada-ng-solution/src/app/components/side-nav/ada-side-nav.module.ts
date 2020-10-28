import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdaSideNavComponent } from './ada-side-nav.component';



@NgModule({
  declarations: [AdaSideNavComponent],
  exports: [
    AdaSideNavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdaSideNavModule { }
