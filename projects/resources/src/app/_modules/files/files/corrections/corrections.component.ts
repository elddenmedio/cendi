import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonsDynamicInterface } from 'dynamic-form';
import { MessageService } from 'primeng/api';
import form_corrections_template from 'projects/resources/src/app/_constants/form.corrections.const';
import { SecureLocalService } from 'secure-local';

@Component({
  selector: 'app-corrections',
  templateUrl: './corrections.component.html',
  styleUrls: ['./corrections.component.scss']
})
export class CorrectionsComponent implements OnInit {

  formTemplate: any = form_corrections_template;

  buttonsDynamic!: ButtonsDynamicInterface[];

  _service: boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private storageService: SecureLocalService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this._initDynamicButtons();
  }

  private _initDynamicButtons(): void {
    this.buttonsDynamic = [
      { icon: 'pi-plus', class: 'p-button-rounded p-button-outlined p-button-info', action: 'add' },
      { icon: 'pi-minus', class: 'p-button-rounded p-button-danger', action: 'remove' }
    ];
  }

  saveForm(event$: any): void {
    if (this._service) {
      this.messageService.add({ key: 'tr', severity: 'success', summary: 'Info', detail: 'Archivo guardado satisfactoriamente.' });
      this.storageService.setStorage('blockedPanel', { name: 'blockedPanel', value: true });
      setTimeout(() => {
        this.storageService.setStorage('blockedPanel', { name: 'blockedPanel', value: false });
        this.router.navigate(['files']);
      }, 3500);
    } else {
      this.messageService.add({ key: 'tr', severity: 'error', summary: 'Info', detail: 'No se pudo guardar el archivo.' });
    }
  }
}
