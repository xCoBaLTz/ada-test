import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdaSideNavModule } from './components/side-nav/ada-side-nav.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdaSideNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
