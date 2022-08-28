import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimeModule } from './prime.module';
import { FilterOperaModule } from 'filter-opera';
import { GeneralActionsModule } from 'general-actions';

import { TableNoResultsComponent } from '../_generals/table-no-results/table-no-results.component';
import { CardOptionsComponent } from '../_generals/card-options/card-options.component';

const generlasModule = [
  FormsModule,
  ReactiveFormsModule,

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
    FormsModule,

    generlasModule,
    PrimeModule
  ],
  exports: [
    TableNoResultsComponent,
    CardOptionsComponent,
    
    generlasModule,
    PrimeModule
  ]
})
export class GeneralModule { }
