import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list'; 

import { AppComponent } from './app.component';
import { MockToolModule } from './features/mock-tool/mock-tool.module';
import { MockToolStatusModule } from './features/mock-tool-status/mock-tool-status.module';
import { MockPartProductionModule } from './features/mock-part-production/mock-part-production.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatGridListModule,
    MockToolModule,
    MockToolStatusModule,
    MockPartProductionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
