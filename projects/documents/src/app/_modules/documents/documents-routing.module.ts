import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrateComponent } from './create/create.component';
import { DefaultComponent } from './default/default.component';
import { ViewDocumentComponent } from './view-document/view-document.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: DefaultComponent, data: { breadcrumb: 'Documentos Frecuentes' } },
      { path: 'create-document/:documentType', component: CrateComponent, data: { breadcrumb: 'Crear Documento' } },
      { path: 'view-document/:documentType', component: ViewDocumentComponent, data: { breadcrumb: 'Ver Documentos' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
