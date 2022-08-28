import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeModule } from './prime.module';
import { BreadcrumbsCustomModule } from 'breadcrumbs';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorsModule } from 'interceptors';

const generlasModule = [
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,

  PrimeModule,
  BreadcrumbsCustomModule,
  InterceptorsModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    generlasModule
  ],
  exports: [
    generlasModule
  ]
})
export class GeneralModule { }
