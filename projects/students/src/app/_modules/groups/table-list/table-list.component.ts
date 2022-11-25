import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FilterMasterInterface } from 'filter-opera';
import { CustomSortService, ExportInterface } from 'general-actions';
import { SortEvent } from 'primeng/api';

import { Subject } from 'rxjs';
import { StudentInterface } from '../../../_interfaces/students';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit, OnDestroy {

  groupID!: number;

  student!: StudentInterface;

  settingsPrintExport: ExportInterface[] = [{
    title: 'Grupos',
    mime: 'xlsx',
    orientation: 'portrait',
    element: 'printElement'
  }];

  filters: FilterMasterInterface = {
    title: 'Opciones de filtro',
    description: 'Puedes buscar a los alumnos usando algunos filtros o de manera general.',
    buttons: [
      { label: 'aplicar', action: 'send', styleClass: 'p-button-outlined p-button-rounded', type: 'pRipple' },
      { label: 'limpiar', action: 'clear', styleClass: 'p-button-text' }
    ],
    filters: [
      { label: 'seleccionar grupo', type: 'multiSelect', options: [] },
      { label: 'seleccionar maestra', type: 'multiSelect', options: [] }
    ]
  };
  displayFilter: boolean = true;

  // workers!: WorkerInterface[];
  // workersTemp!: WorkerInterface[];

  displayTemplate: boolean = true;

  defaultRows: number = 10;
  defaultPaginator = { first: 0, page: 0, pageCount: 0, rows: 10 };

  private unSubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private customSortService: CustomSortService
  ) { 
    this.route.params.subscribe(params => {
      this.groupID = params['groupID'];
    });
  }

  ngOnInit(): void {
    // Filters, get options list to be displayed as filter options
    this._getFiltersOptions();

    // Get all students
    // this._getStudents();
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
    }
  }

  paginate(event$: any): void {
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
    // const _workers = this.workersTemp.slice(event$.first, (event$.rows * (event$.page + 1)));
    // this.workers = _workers;
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
    this.router.navigate([`/workers/personal-info/${event$.data.id}`], { relativeTo: this.route });
  }
}
