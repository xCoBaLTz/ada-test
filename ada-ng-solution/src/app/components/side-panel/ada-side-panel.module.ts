import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdaSidePanelComponent } from './ada-side-panel.component';

@NgModule({
  declarations: [AdaSidePanelComponent],
  exports: [
    AdaSidePanelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdaSidePanelModule {
}
