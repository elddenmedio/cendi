import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { TableListComponent } from './table-list/table-list.component';
import { GeneralModule } from '../general.module';
import { DefaultComponent } from './default/default.component';


@NgModule({
  declarations: [
    TableListComponent,
    DefaultComponent
  ],
  imports: [
    CommonModule,
    GroupsRoutingModule,

    GeneralModule
  ]
})
export class GroupsModule { }
