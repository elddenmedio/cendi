import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'resources', loadChildren: () => import('./_modules/resources/resources.module').then((m) => m.ResourcesModule), data: { breadcrumb: 'Resources' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
