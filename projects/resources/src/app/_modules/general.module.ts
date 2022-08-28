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
  ]
})
export class GeneralModule { }
