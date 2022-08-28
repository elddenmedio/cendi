import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimeModule } from './prime.module';
import { FilterOperaModule } from 'filter-opera';

import { TableNoResultsComponent } from '../_generals/table-no-results/table-no-results.component';
import { GeneralActionsModule } from 'general-actions';
import { InterceptorsModule } from 'interceptors';
import { HttpClientModule } from '@angular/common/http';
import { PositionsService } from '../_services/positions.service';
import { WorkersService } from '../_services/workers.service';
import { SubjectService } from '../_services/subject.service';
import { PermissionsService } from '../_services/permissions.service';
import { CenterService } from '../_services/center.service';
import { GroupsService } from '../_services/groups.service';
import { GetTimecheckPipe } from '../_pipes/get-timecheck.pipe';

const generlasModule = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,

  PrimeModule
]

@NgModule({
  declarations: [
    TableNoResultsComponent,

    GetTimecheckPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    generlasModule,
    FilterOperaModule,
    GeneralActionsModule,
    InterceptorsModule
  ],
  exports: [
    generlasModule,

    TableNoResultsComponent,

    GetTimecheckPipe
  ],
  providers: [
    PositionsService,
    SubjectService,
    PermissionsService,
    CenterService,
    WorkersService,
    GroupsService
  ]
})
export class GeneralModule { }
