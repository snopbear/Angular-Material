import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { FlexBoxComponent } from './flex-box/flex-box.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    DemoRoutingModule,
    FlexLayoutModule
  ],
  declarations: [ButtonsComponent,FlexBoxComponent]
})
export class DemoModule { }
