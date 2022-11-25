import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimeModule } from './prime.module';
import { FilterOperaModule } from 'filter-opera';
import { GeneralActionsModule } from 'general-actions';
import { DynamicFormModule } from 'dynamic-form';

import { TableNoResultsComponent } from '../_generals/table-no-results/table-no-results.component';
import { CardOptionsComponent } from '../_generals/card-options/card-options.component';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorsModule } from 'interceptors';
import { ResourcesService } from '../_services/resources.service';
import { InterviewService } from '../_services/interview.service';

const generlasModule = [
  FormsModule,
  ReactiveFormsModule,

  PrimeModule,
  FilterOperaModule,
  GeneralActionsModule,
  DynamicFormModule
]

@NgModule({
  declarations: [
    TableNoResultsComponent,
    CardOptionsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    generlasModule,
    InterceptorsModule
  ],
  exports: [
    TableNoResultsComponent,
    CardOptionsComponent,

    generlasModule
  ],
  providers: [
    ResourcesService,
    InterviewService
  ]
})
export class GeneralModule { }
