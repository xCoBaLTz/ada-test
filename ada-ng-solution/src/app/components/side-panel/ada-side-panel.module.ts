import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdaSidePanelComponent } from './ada-side-panel.component';
import { AdaTitleTileModule } from '../title-tile/ada-title-tile.module';

@NgModule({
  declarations: [AdaSidePanelComponent],
  exports: [
    AdaSidePanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdaTitleTileModule
  ]
})
export class AdaSidePanelModule {
}
