import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { SecureLocalModule } from 'secure-local';

import { GeneralModule } from './_modules/general.module';

import { AppComponent } from './app.component';

import { HelpComponent } from './_components/help/help.component';
import { NavbarComponent } from './_components/_generals/navbar/navbar.component';
import { SidebarComponent } from './_components/_generals/sidebar/sidebar.component';
import { FooterComponent } from './_components/_generals/footer/footer.component';
import { CalendarComponent } from './_components/calendar/calendar.component';
import { LoginComponent } from './_components/login/login.component';
import { ProfileComponent } from './_components/_generals/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HelpComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    CalendarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    SecureLocalModule,

    GeneralModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
