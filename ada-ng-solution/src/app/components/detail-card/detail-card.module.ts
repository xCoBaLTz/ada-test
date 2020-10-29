import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailCardComponent } from './detail-card.component';



@NgModule({
  declarations: [DetailCardComponent],
  imports: [
    CommonModule
  ],
  exports: [DetailCardComponent]
})
export class DetailCardModule { }
