import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimeModule } from './prime.module';
import { FilterOperaModule } from 'filter-opera';
import { GeneralActionsModule } from 'general-actions';
import { TableNoResultsComponent } from '../_generals/table-no-results/table-no-results.component';


const generlasModule = [
  FormsModule,
  ReactiveFormsModule,

  PrimeModule,
  FilterOperaModule,
  GeneralActionsModule
]

@NgModule({
  declarations: [
    TableNoResultsComponent
  ],
  imports: [
    CommonModule,

    generlasModule
  ],
  exports: [
    TableNoResultsComponent,
    
    generlasModule
  ]
})
export class GeneralModule { }
