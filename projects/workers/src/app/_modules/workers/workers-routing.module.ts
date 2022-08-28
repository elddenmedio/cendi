import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { TableListComponent } from './table-list/table-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TableListComponent, data: { breadcrumb: 'Trabajadores' } },
      { path: 'add-worker', component: PersonalInfoComponent, data: { breadcrumb: 'Agregar Trabajador' } },
      { path: 'personal-info/:workerID', component: PersonalInfoComponent, data: { breadcrumb: 'Información Personal' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkersRoutingModule { }
