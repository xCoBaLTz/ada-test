import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdaDetailsModule } from './components/details/ada-details.module';
import { AdaSidePanelModule } from './components/side-panel/ada-side-panel.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AdaDetailsModule,
    AdaSidePanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
