import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';

import { TableListComponent } from './table-list/table-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: DefaultComponent, data: { breadcrumb: 'Grupos' } },
      { path: 'view-group/:groupID', component: TableListComponent, data: { breadcrumb: 'Detalle de Grupo' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
