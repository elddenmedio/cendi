import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollPanelModule } from 'primeng/scrollpanel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { MenubarModule } from 'primeng/menubar';
import { SlideMenuModule } from 'primeng/slidemenu';
import { BlockUIModule } from 'primeng/blockui';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { TooltipModule } from 'primeng/tooltip';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SidebarModule } from 'primeng/sidebar';

const primeModules = [
  ScrollPanelModule,
  InputTextModule,
  ButtonModule,
  PasswordModule,
  CheckboxModule,
  MenubarModule,
  SlideMenuModule,
  BlockUIModule,
  ConfirmDialogModule,
  ToastModule,
  MessagesModule,
  AvatarModule,
  AvatarGroupModule,
  TooltipModule,
  ScrollTopModule,
  SidebarModule
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
    ConfirmationService,
    MessageService
  ]
})
export class PrimeModule { }
