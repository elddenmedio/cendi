import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimeModule } from './prime.module';

import { CardOptionsComponent } from '../_components/_generals/card-options/card-options.component';

const generlasModule = [
  FormsModule,
  ReactiveFormsModule,

  PrimeModule
]

@NgModule({
  declarations: [
    CardOptionsComponent
  ],
  imports: [
    CommonModule,

    generlasModule
  ],
  exports: [
    CardOptionsComponent,

    generlasModule
  ]
})
export class GeneralModule { }
