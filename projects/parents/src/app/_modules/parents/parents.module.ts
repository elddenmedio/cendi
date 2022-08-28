import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentsRoutingModule } from './parents-routing.module';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EditComponent } from './edit/edit.component';

import { GeneralModule } from '../general.module';
import { TableListComponent } from './table-list/table-list.component';

@NgModule({
  declarations: [
    PersonalInfoComponent,
    EditComponent,
    TableListComponent
  ],
  imports: [
    CommonModule,
    ParentsRoutingModule,

    GeneralModule
  ]
})
export class ParentsModule { }
