import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, ConfirmEventType, Message, MessageService, PrimeNGConfig } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { SecureLocalService } from 'secure-local';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  displayTemplate: boolean = false;

  blockedPanel: boolean = false;

  msgs: Message[] = [];
  position!: string;

  @ViewChild('sidebarMenu') elementView!: ElementRef;

  innerWidth: any;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }

  private unSubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private storageService: SecureLocalService,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService
  ) {
    this.storageService.storageEmit
      //.pipe(takeUntil(this.unSubscribe$))
      .subscribe(
        (el: any) => {
          if (el?.name === 'user') {
            this.displayTemplate = el;
          }

          if (el?.name === 'blockedPanel') {
            debugger
            this.blockedPanel = el.value;
          }
debugger
          if (el?.name === 'toast') {
            debugger
            this.displayToast(el?.value?.type, el?.value?.message);
          }
        }
      );
  }

  ngOnInit(): void {
    const _user = this.storageService.getStorage('user') ?? null;
    this.displayTemplate = _user ?? false;

    this.primengConfig.ripple = true;
    this.innerWidth = window.innerWidth;
  }

  ngOnDestroy(): void {
    this.storageService.deleteStorage('login');
    this.unSubscribe$.next(true);
    this.unSubscribe$.unsubscribe();
  }

  modalCancel() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({ key: 'tr', severity: 'info', summary: 'Info', detail: 'Message Content' });
      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });
  }

  displayToast(type: string, message: string): void {
    this.messageService.add({ key: 'tr', severity: type, summary: '', detail: message });
  }
}
