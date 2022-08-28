import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'students', loadChildren: () => import('./_modules/students/students.module').then((m) => m.StudentsModule), data: { breadcrumb: 'Alumnos Opciones'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
