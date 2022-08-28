import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkersRoutingModule } from './workers-routing.module';

import { GeneralModule } from '../general.module';
import { PrimeModule } from '../prime.module';
import { FilterOperaModule } from 'filter-opera';
import { GeneralActionsModule } from 'general-actions';

import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { TableListComponent } from './table-list/table-list.component';
import { CreateComponent } from './create/create.component';
import { SkeletonPersonalComponent } from './personal-info/skeleton/skeleton.component';
import { SkeletonTableComponent } from './table-list/skeleton-table/skeleton-table.component';

@NgModule({
  declarations: [
    PersonalInfoComponent,
    TableListComponent,
    CreateComponent,
    SkeletonPersonalComponent,
    SkeletonTableComponent
  ],
  imports: [
    CommonModule,
    WorkersRoutingModule,

    GeneralModule,
    PrimeModule,
    FilterOperaModule,
    GeneralActionsModule
  ]
})
export class WorkersModule { }
