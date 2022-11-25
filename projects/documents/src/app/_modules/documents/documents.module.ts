import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';

import { GeneralModule } from '../general.module';


import { DefaultComponent } from './default/default.component';
import { CrateComponent } from './create/create.component';
import { AttendanceComponent } from './_documents/attendance/attendance.component';
import { KpiStudentComponent } from './_documents/kpi-student/kpi-student.component';
import { ViewDocumentComponent } from './view-document/view-document.component';
import { PdfKpiStudentComponent } from './_documents/kpi-student/pdf-kpi-student/pdf-kpi-student.component';

import { DocumentsService } from '../../_services/documents.service';

@NgModule({
  declarations: [
    DefaultComponent,
    CrateComponent,
    AttendanceComponent,
    KpiStudentComponent,
    ViewDocumentComponent,
    PdfKpiStudentComponent
  ],
  imports: [
    CommonModule,
    DocumentsRoutingModule,

    GeneralModule
  ],
  providers: [
    DocumentsService
  ]
})
export class DocumentsModule { }
