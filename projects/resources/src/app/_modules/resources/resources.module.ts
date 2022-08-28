import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';

import { DefaultComponent } from './default/default.component';
import { GeneralModule } from '../general.module';

@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    ResourcesRoutingModule,

    GeneralModule
  ]
})
export class ResourcesModule { }
