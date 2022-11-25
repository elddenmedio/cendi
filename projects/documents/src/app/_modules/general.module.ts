import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeModule } from './prime.module';
import { FilterOperaModule } from 'filter-opera';
import { GeneralActionsModule } from 'general-actions';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorsModule } from 'interceptors';
import { DynamicFormModule } from 'dynamic-form';

import { CardOptionsComponent } from '../_generals/card-options/card-options.component';
import { TableContentComponent } from '../_generals/table-content/table-content.component';

import { GroupService } from '../_services/group.service';

import { TotalsLoopPipe } from '../_pipes/totals-loop.pipe';
import { TotalsLoopByStepPipe } from '../_pipes/totals-loop-by-step.pipe';
import { TotalsPercentPipe } from '../_pipes/totals-percent.pipe';

const generlasModule = [
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,

  PrimeModule,
  FilterOperaModule,
  GeneralActionsModule,
  DynamicFormModule,
  InterceptorsModule
]

@NgModule({
  declarations: [
    CardOptionsComponent,
    TableContentComponent,

    TotalsLoopPipe,
    TotalsLoopByStepPipe,
    TotalsPercentPipe
  ],
  imports: [
    CommonModule,

    generlasModule
  ],
  exports: [
    CardOptionsComponent,
    TableContentComponent,

    TotalsLoopPipe,
    TotalsLoopByStepPipe,
    TotalsPercentPipe,
    
    generlasModule
  ],
  providers: [
    GroupService
  ]
})
export class GeneralModule { }
