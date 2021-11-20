import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolStatusComponent } from './components/tool-status/tool-status.component';
import { UptimeComponent } from './components/uptime/uptime.component';
import { DowntimeComponent } from './components/downtime/downtime.component';
import { SeriesComponent } from './components/series/series.component';



@NgModule({
  declarations: [
    ToolStatusComponent,
    UptimeComponent,
    DowntimeComponent,
    SeriesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToolStatusComponent,
  ],
})
export class MockToolStatusModule { }
