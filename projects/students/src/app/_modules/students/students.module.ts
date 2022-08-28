import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { TableListComponent } from './table-list/table-list.component';
import { EditComponent } from './edit/edit.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { DefaultComponent } from './default/default.component';
import { GeneralModule } from '../general.module';


@NgModule({
  declarations: [
    TableListComponent,
    EditComponent,
    PersonalInfoComponent,
    DefaultComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,

    GeneralModule
  ]
})
export class StudentsModule { }
