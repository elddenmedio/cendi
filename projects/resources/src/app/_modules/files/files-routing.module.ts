import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditComponent } from './edit/edit.component';
import { FilesComponent } from './files/files.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: FilesComponent },
      { path: 'edit', component: EditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutingModule { }
