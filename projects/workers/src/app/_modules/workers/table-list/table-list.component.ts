import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterMasterInterface } from 'filter-opera';
import { CustomSortService, ExportInterface } from 'general-actions';
import { MessageService, SortEvent } from 'primeng/api';
import { Paginator } from 'primeng/paginator';
import { Subject, takeUntil } from 'rxjs';
import { UserInterface } from '../../../_interfaces/user';
import { WorkersService } from '../../../_services/workers.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
  providers: [WorkersService]
})
export class TableListComponent implements OnInit, OnDestroy {

  settingsPrintExport: ExportInterface[] = [{
    title: 'Trabajadores',
    mime: 'xlsx',
    orientation: 'portrait',
    element: 'printElement'
  }];

  filters: FilterMasterInterface = {
    title: 'Opciones de filtro',
    description: 'Puedes buscar a los trabajadores usando algunos filtros o de manera general.',
    buttons: [
      { label: 'aplicar', action: 'send', styleClass: 'p-button-outlined p-button-rounded', type: 'pRipple' },
      { label: 'limpiar', action: 'clear', styleClass: 'p-button-text' }
    ],
    filters: [
      { label: 'seleccionar puesto', type: 'multiSelect', options: [] },
      { label: 'seleccionar materia', type: 'multiSelect', options: [] },
      { label: 'seleccionar grupo', type: 'multiSelect', options: [] }
    ]
  };
  displayFilter: boolean = true;

  workers!: UserInterface[];
  workersTemp!: UserInterface[];

  displayTemplate: boolean = true;

  defaultRows: number = 10;
  defaultPaginator = { first: 0, page: 0, pageCount: 0, rows: 10 };
  totalRows: any = 0;

  skeleton: boolean = true;

  private unSubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private customSortService: CustomSortService,
    private workersServices: WorkersService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    // Filters, get options list to be displayed as filter options
    this._getFiltersOptions();

    // Get workers
    this._getWorkers();
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next(true);
    this.unSubscribe$.unsubscribe();
  }

  private _getFiltersOptions(): void {
    if (this.filters?.filters) {
      // positions
      this.filters.filters[0].options = [
        { name: 'Todos', code: 'ALL', checked: true, default: true },
        { name: 'titular', code: 1 },
        { name: 'asistente', code: 2 },
        { name: 'dentista', code: 3 },
        { name: 'doctor', code: 4 },
        { name: 'pedagoga', code: 5 },
        { name: 'proteccion civil', code: 6 }
      ];
      // subject
      this.filters.filters[1].options = [
        { name: 'Todos', code: 'ALL', checked: true, default: true },
        { name: 'Español', code: 1 },
        { name: 'Matemáticas', code: 2 },
        { name: 'Deportes', code: 3 },
        { name: 'Música', code: 4 }
      ];
      // group
      this.filters.filters[2].options = [
        { name: 'Todos', code: 'ALL', checked: true, default: true },
        { name: 'Maternal I', code: 'MI' },
        { name: 'Maternal II', code: 'MII' },
        { name: 'Preescolar I', code: 'PI' },
        { name: 'Preescolar II', code: 'PII' }
      ];
    }
  }

  private _getWorkers(): void {
    this.workersServices.getWorkers(this.defaultPaginator.page, this.defaultPaginator.rows)
      .pipe(takeUntil(this.unSubscribe$)).subscribe(
        workers => {
          this.workers = workers;
          this.workersTemp = this.workers;
          this.defaultPaginator.pageCount = Math.ceil(this.workers.length / 10);
          this.totalRows = this.workers[0].totalRows;

          this.skeleton = false;
        },
        err => {
          debugger
        }
      );
    /*this.workers = [
      { id: 0, name: 'Andrea', lastName: 'Apellido', group: 'PIA', subject: 'Español', position: { name: 'titular', styleClass: 'opera-holder' }, timeFrom: '7:30', timeTo: '3:00', timeBreak: '11:20' },
      { id: 1, name: 'jorge', lastName: 'Apellido', group: 'MI', subject: 'Lenguage', position: { name: 'asistente', styleClass: 'opera-assistant' }, timeFrom: '8:00', timeTo: '3:30', timeBreak: '12:00' },
      { id: 2, name: 'Alina', lastName: 'Apellido', group: 'PIA', subject: 'Español', position: { name: 'dentista', styleClass: 'opera-dentinst' }, timeFrom: '7:30', timeTo: '3:00', timeBreak: '11:20' },
      { id: 3, name: 'Liset', lastName: 'Apellido', group: 'MI', subject: 'Lenguage', position: { name: 'pedagogia', styleClass: 'opera-pedagogy' }, timeFrom: '8:00', timeTo: '3:30', timeBreak: '12:00' },
      { id: 4, name: 'Ivan', lastName: 'Apellido', group: 'PIA', subject: 'Español', position: { name: 'pedagigia', styleClass: 'opera-pedagogy' }, timeFrom: '7:30', timeTo: '3:00', timeBreak: '11:20' },
      { id: 5, name: 'Erik', lastName: 'Apellido', group: 'MI', subject: 'Lenguage', position: { name: 'doctor', styleClass: 'opera-doctor' }, timeFrom: '8:00', timeTo: '3:30', timeBreak: '12:00' },
      { id: 6, name: 'Danira', lastName: 'Apellido', group: 'PIA', subject: 'Español', position: { name: 'proteccion civil', styleClass: 'opera-protection' }, timeFrom: '7:30', timeTo: '3:00', timeBreak: '11:20' },
      { id: 7, name: 'Favian', lastName: 'Apellido', group: 'MI', subject: 'Lenguage', position: { name: 'directivo', styleClass: 'opera-principal' }, timeFrom: '8:00', timeTo: '3:30', timeBreak: '12:00' },
      { id: 8, name: 'Benjamin', lastName: 'Apellido', group: 'PIA', subject: 'Español', position: { name: 'asistene', styleClass: 'opera-assistant' }, timeFrom: '7:30', timeTo: '3:00', timeBreak: '11:20' },
      { id: 9, name: 'Issac', lastName: 'Apellido', group: 'MI', subject: 'Lenguage', position: { name: 'titular', styleClass: 'opera-holder' }, timeFrom: '8:00', timeTo: '3:30', timeBreak: '12:00' },
      { id: 10, name: 'Andrea', lastName: 'Apellido', group: 'PIA', subject: 'Español', position: { name: 'titular', styleClass: 'opera-holder' }, timeFrom: '7:30', timeTo: '3:00', timeBreak: '11:20' },
      { id: 11, name: 'jorge', lastName: 'Apellido', group: 'MI', subject: 'Lenguage', position: { name: 'asistente', styleClass: 'opera-assistant' }, timeFrom: '8:00', timeTo: '3:30', timeBreak: '12:00' },
      { id: 12, name: 'Alina', lastName: 'Apellido', group: 'PIA', subject: 'Español', position: { name: 'dentista', styleClass: 'opera-dentinst' }, timeFrom: '7:30', timeTo: '3:00', timeBreak: '11:20' }
    ];*/
  }

  paginate(event$: any): void {
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
    this.skeleton = true;
    this.defaultPaginator.page = event$.page;
    this._getWorkers();
  }

  customSort(event$: SortEvent) {
    this.customSortService.customSort(event$);
  }

  filtersAction(event$: any): void {
    if (event$) {
      debugger
    } else {
      this.displayFilter = false;
      setTimeout(() => {
        this._getFiltersOptions();
        this.displayFilter = true;
      }, 1);
    }
  }

  onRowSelect(event$: any): void {
    this.router.navigate([`/workers/personal-info/${event$.data.uID}`], { relativeTo: this.route });
  }

  manageEvent(event$: any): void {
    if (event$?.action === 'add') {
      this.router.navigate([`/workers/add-worker`], { relativeTo: this.route });
    }
  }

  deleteActiveWorker(worker: UserInterface, active: boolean): void {
    this.workersServices.deleteWorkers(worker.uID, active)
      .pipe(takeUntil(this.unSubscribe$)).subscribe(
        succ => {
          this.messageService.add({ key: 'tr', severity: 'success', summary: '', detail: succ });
          this._getWorkers();
        },
        err => {
          debugger
        }
      );
  }
}
