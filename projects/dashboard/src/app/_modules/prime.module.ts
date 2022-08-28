import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ScrollPanelModule } from 'primeng/scrollpanel';
// import { InputTextModule } from 'primeng/inputtext';
// import { PasswordModule } from 'primeng/password';
// import { CheckboxModule } from 'primeng/checkbox';
// import { MenubarModule } from 'primeng/menubar';
// import { SlideMenuModule } from 'primeng/slidemenu';
// import { BlockUIModule } from 'primeng/blockui';
// import { ConfirmDialogModule } from 'primeng/confirmdialog';
// import { ToastModule } from 'primeng/toast';
// import { MessagesModule } from 'primeng/messages';
// import { ConfirmationService, MessageService } from 'primeng/api';

import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

const primeModules = [
  // ScrollPanelModule,
  // InputTextModule,
  // PasswordModule,
  // CheckboxModule,
  // MenubarModule,
  // SlideMenuModule,
  // BlockUIModule,
  // ConfirmDialogModule,
  // ToastModule,
  // MessagesModule
  ChartModule,
  CardModule,
  ButtonModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    primeModules
  ],
  exports: [
    primeModules
  ],
  providers: [
  ]
})
export class PrimeModule { }
