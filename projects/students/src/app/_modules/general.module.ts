import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimeModule } from './prime.module';
import { FilterOperaModule } from 'filter-opera';
import { GeneralActionsModule } from 'general-actions';

import { TableNoResultsComponent } from '../_generals/table-no-results/table-no-results.component';
import { CardOptionsComponent } from '../_generals/card-options/card-options.component';
import { StudentService } from '../_services/student.service';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorsModule } from 'interceptors';

const generlasModule = [
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,

  PrimeModule,
  FilterOperaModule,
  GeneralActionsModule
]

@NgModule({
  declarations: [
    TableNoResultsComponent,
    CardOptionsComponent
  ],
  imports: [
    CommonModule,

    generlasModule,
    PrimeModule,

    InterceptorsModule
  ],
  exports: [
    TableNoResultsComponent,
    CardOptionsComponent,
    
    generlasModule,
    PrimeModule
  ],
  providers: [
    StudentService
  ]
})
export class GeneralModule { }
