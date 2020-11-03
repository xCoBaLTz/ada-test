import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdaSidePanelComponent } from './ada-side-panel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdaSidePanelComponent],
  exports: [
    AdaSidePanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AdaSidePanelModule {
}
