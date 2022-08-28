import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { PaginatorModule } from 'primeng/paginator';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { ChipModule } from 'primeng/chip';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { PasswordModule } from 'primeng/password';
import { SkeletonModule } from 'primeng/skeleton';

const primeModules = [
  TableModule,
  MultiSelectModule,
  DropdownModule,
  SliderModule,
  ButtonModule,
  TagModule,
  PaginatorModule,
  AvatarModule,
  AvatarGroupModule,
  DividerModule,
  InputTextModule,
  ChipModule,
  InputMaskModule,
  CalendarModule,
  PasswordModule,
  SkeletonModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    primeModules
  ],
  exports: [
    primeModules
  ]
})
export class PrimeModule { }
