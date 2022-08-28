import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { InterceptorsComponent } from './_components/interceptors.component';
import { BaseURLInterceptor } from './_interceptors/base_url.interceptor';
import { LanguageInterceptor } from './_interceptors/language.interceptor';
import { SecureLocalModule } from 'secure-local';


@NgModule({
  declarations: [
    InterceptorsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    InterceptorsComponent,

    SecureLocalModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseURLInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LanguageInterceptor,
      multi: true
    }
  ]
})
export class InterceptorsModule { }
