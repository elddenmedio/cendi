import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginGuard } from 'secure-local';
import { CalendarComponent } from './_components/calendar/calendar.component';

import { HelpComponent } from './_components/help/help.component';
import { LoginComponent } from './_components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: 'login', component: LoginComponent, data: { redirectLogin: ['login'] } },
  { path: 'help', component: HelpComponent, data: { redirectLogin: ['login'], breadcrumb: 'Ayuda' } },
  { path: 'calendar', component: CalendarComponent, data: { breadcrumb: 'Calendario' } },

  { path: 'dashboard', canActivate: [LoginGuard], loadChildren: () => import('dashboard/Module').then((m) => m.DashboardModule), data: { redirectLogin: ['login'], breadcrumb: 'Dashboard' } },

  { path: 'resources', canActivate: [LoginGuard], loadChildren: () => import('resources/Module').then((m) => m.ResourcesModule), data: { redirectLogin: ['login'], breadcrumb: 'Resources' } },
  // { path: 'files', canActivate: [LoginGuard], loadChildren: () => import('resources/Module').then((m) => m.FilesModule), data: { redirectLogin: ['login'] } },
  // { path: 'warehouse', canActivate: [LoginGuard], loadChildren: () => import('resources/Module').then((m) => m.WarehouseModule), data: { redirectLogin: ['login'] } },

  // { path: 'groups', canActivate: [LoginGuard], loadChildren: () => import('students/Module').then((m) => m.GroupsModule), data: { redirectLogin: ['login'], breadcrumb: 'Grupos' } },
  { path: 'parents', canActivate: [LoginGuard], loadChildren: () => import('parents/Module').then((m) => m.ParentsModule), data: { redirectLogin: ['login'], breadcrumb: 'Padres' } },
  { path: 'students', canActivate: [LoginGuard], loadChildren: () => import('students/Module').then((m) => m.StudentsModule), data: { redirectLogin: ['login'], breadcrumb: 'Alumnos Opciones' } },

  { path: 'workers', canActivate: [LoginGuard], loadChildren: () => import('workers/Module').then((m) => m.WorkersModule), data: { redirectLogin: ['login'], breadcrumb: 'Trabajadores' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
