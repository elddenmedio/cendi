import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesRoutingModule } from './files-routing.module';
import { GeneralModule } from '../general.module';

import { EditComponent } from './edit/edit.component';
import { FilesComponent } from './files/files.component';
import { CorrectionsComponent } from './files/corrections/corrections.component';
import { InterviewComponent } from './files/interview/interview.component';

@NgModule({
  declarations: [
    EditComponent,
    FilesComponent,

    // Templates Format
    CorrectionsComponent,
    InterviewComponent
  ],
  imports: [
    CommonModule,
    FilesRoutingModule,

    GeneralModule
  ]
})
export class FilesModule { }
