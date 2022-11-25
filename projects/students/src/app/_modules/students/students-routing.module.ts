import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';

import { EditComponent } from './edit/edit.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { TableListComponent } from './table-list/table-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: DefaultComponent, data: { breadcrumb: 'Alumnos Opciones'} },
      { path: 'all', component: TableListComponent, data: { breadcrumb: 'Alumnos'} },
      { path: 'personal-info', component: PersonalInfoComponent, data: { breadcrumb: 'Información Personal'} },
      { path: 'edit', component: EditComponent, data: { breadcrumb: 'Editar'} },
      { path: 'groups', loadChildren: () => import('../../_modules/groups/groups.module').then((m) => m.GroupsModule), data: { breadcrumb: 'Grupos'} },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
