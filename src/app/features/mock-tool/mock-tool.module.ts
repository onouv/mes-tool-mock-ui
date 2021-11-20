import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card'; 
import { MatFormFieldModule } from '@angular/material/form-field';

import { ToolComponent } from './components/tool/tool.component';

@NgModule({
  declarations: [
    ToolComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSidenavModule,
  ],
  exports: [ToolComponent],
})
export class MockToolModule { }