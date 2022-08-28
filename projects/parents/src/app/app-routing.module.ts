import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'parents', loadChildren: () => import('./_modules/parents/parents.module').then((m) => m.ParentsModule), data: { breadcrumb: 'Padres'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
