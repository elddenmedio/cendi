import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: DefaultComponent, data: { breadcrumb: 'Opciones de Archivos' } },
      { path: 'files/:fileType', loadChildren: () => import('../files/files.module').then((m) => m.FilesModule), data: { breadcrumb: 'Archivo {{fileType}}' } },
      { path: 'warehouse', loadChildren: () => import('../warehouse/warehouse.module').then((m) => m.WarehouseModule), data: { breadcrumb: 'Almacen' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
