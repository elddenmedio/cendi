import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditComponent } from './edit/edit.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { TableListComponent } from './table-list/table-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TableListComponent, data: { breadvrumb: 'PAdres' } },
      { path: 'edit', component: EditComponent, data: { breadcrumb: 'Editar' } },
      { path: 'personal-info/:parentID', component: PersonalInfoComponent, data: { breadcrumb: 'Información Personal' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentsRoutingModule { }
