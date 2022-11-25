import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterMasterInterface } from 'filter-opera';
import { CustomSortService, ExportInterface } from 'general-actions';
import { SortEvent } from 'primeng/api';
import { Subject } from 'rxjs';
import { ParentInterface } from '../../../_interfaces/parents';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit, OnDestroy {

  parents!: ParentInterface[];
  parentsTemp!: ParentInterface[];

  settingsPrintExport: ExportInterface[] = [{
    title: 'Grupos',
    mime: 'xlsx',
    orientation: 'portrait',
    element: 'printElement'
  }];

  filters: FilterMasterInterface = {
    title: 'Opciones de filtro',
    description: 'Puedes buscar a los padres de familia usando algunos filtros o de manera general.',
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

  displayTemplate: boolean = true;

  defaultRows: number = 10;
  defaultPaginator = { first: 0, page: 0, pageCount: 0, rows: 10 };

  private unSubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private customSortService: CustomSortService
  ) { }

  ngOnInit(): void {
    // Filters, get options list to be displayed as filter options
    this._getFiltersOptions();

    // Get all students
    this._getParents();
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next(true);
    this.unSubscribe$.unsubscribe();
  }

  private _getFiltersOptions(): void {
    if (this.filters?.filters) {
      // group
      this.filters.filters[1].options = [
        { name: 'Todos', code: 'ALL', checked: true, default: true },
        { name: 'Maria elena', code: 1 },
        { name: 'denise', code: 2 },
        { name: 'veronica', code: 3 },
        { name: 'lili', code: 4 }
      ];
      // worker
      this.filters.filters[0].options = [
        { name: 'Todos', code: 'ALL', checked: true, default: true },
        { name: 'PI A', code: 1 },
        { name: 'PII A', code: 2 },
        { name: 'Maternal I A', code: 3 },
        { name: 'Maternal I B', code: 4 }
      ];
    }
  }

  private _getParents(): void {
    this.parents = [
      {
        id: 1, name: 'Asuzena', lastName: 'Martinez', phone: [
          { name: 'trabajo', phone: 5512345678, extension: 123 },
          { name: 'personal', phone: 5512345678, principal: true }
        ],
        canCall: true, canText: true, sex: 'mujer', prefix: 'sra.', maried: true, sonsNumber: 2,
        sons: [
          { id: 1, active: false, name: 'Carlos', lastName: 'Arana', secondLastName: 'Martinez', birthday: '2018-10-07' },
          { id: 2, active: true, name: 'Asuzena', lastName: 'Arana', secondLastName: 'Martinez', birthday: '2020-10-07' }
        ],
        couple: {
          id: 2, name: 'Carlos', lastName: 'Arana', phone: [
            { name: 'trabajo', phone: 5512345678, extension: 123 },
            { name: 'personal', phone: 5512345678, principal: true }
          ],
          canCall: true, canText: false, sex: 'masculino', prefix: 'sr.', maried: true, sonsNumber: 2,
          work: { jobPosition: 'profesor', jobPlace: 'escom', jobAddress: 'Unidad Profesional Adolfo López Mateos, 07320 Ciudad de México, CDMX' }
        },
        work: { jobPosition: 'asistente', jobPlace: 'escom', jobAddress: 'Unidad Profesional Adolfo López Mateos, 07320 Ciudad de México, CDMX' }
      },
      {
        id: 3, name: 'Asuzena', lastName: 'Martinez', phone: [
          { name: 'trabajo', phone: 5512345678, extension: 123 },
          { name: 'personal', phone: 5512345678, principal: true }
        ],
        canCall: true, canText: true, sex: 'mujer', prefix: 'sra.', maried: true, sonsNumber: 2,
        sons: [
          { id: 1, active: false, name: 'Carlos', lastName: 'Arana', secondLastName: 'Martinez', birthday: '2018-10-07' },
          { id: 2, active: true, name: 'Asuzena', lastName: 'Arana', secondLastName: 'Martinez', birthday: '2020-10-07' }
        ],
        couple: {
          id: 4, name: 'Carlos', lastName: 'Arana', phone: [
            { name: 'trabajo', phone: 5512345678, extension: 123 },
            { name: 'personal', phone: 5512345678, principal: true }
          ],
          canCall: true, canText: false, sex: 'masculino', prefix: 'sr.', maried: true, sonsNumber: 2,
          work: { jobPosition: 'profesor', jobPlace: 'escom', jobAddress: 'Unidad Profesional Adolfo López Mateos, 07320 Ciudad de México, CDMX' }
        },
        work: { jobPosition: 'asistente', jobPlace: 'escom', jobAddress: 'Unidad Profesional Adolfo López Mateos, 07320 Ciudad de México, CDMX' }
      },
      {
        id: 5, name: 'Asuzena', lastName: 'Martinez', phone: [
          { name: 'trabajo', phone: 5512345678, extension: 123 },
          { name: 'personal', phone: 5512345678, principal: true }
        ],
        canCall: true, canText: true, sex: 'mujer', prefix: 'sra.', maried: true, sonsNumber: 2,
        sons: [
          { id: 1, active: false, name: 'Carlos', lastName: 'Arana', secondLastName: 'Martinez', birthday: '2018-10-07' },
          { id: 2, active: true, name: 'Asuzena', lastName: 'Arana', secondLastName: 'Martinez', birthday: '2020-10-07' }
        ],
        couple: {
          id: 6, name: 'Carlos', lastName: 'Arana', phone: [
            { name: 'trabajo', phone: 5512345678, extension: 123 },
            { name: 'personal', phone: 5512345678, principal: true }
          ],
          canCall: true, canText: false, sex: 'masculino', prefix: 'sr.', maried: true, sonsNumber: 2,
          work: { jobPosition: 'profesor', jobPlace: 'escom', jobAddress: 'Unidad Profesional Adolfo López Mateos, 07320 Ciudad de México, CDMX' }
        },
        work: { jobPosition: 'asistente', jobPlace: 'escom', jobAddress: 'Unidad Profesional Adolfo López Mateos, 07320 Ciudad de México, CDMX' }
      },
      {
        id: 7, name: 'Asuzena', lastName: 'Martinez', phone: [
          { name: 'trabajo', phone: 5512345678, extension: 123 },
          { name: 'personal', phone: 5512345678, principal: true }
        ],
        canCall: true, canText: true, sex: 'mujer', prefix: 'sra.', maried: true, sonsNumber: 2,
        sons: [
          { id: 1, active: false, name: 'Carlos', lastName: 'Arana', secondLastName: 'Martinez', birthday: '2018-10-07' },
          { id: 2, active: true, name: 'Asuzena', lastName: 'Arana', secondLastName: 'Martinez', birthday: '2020-10-07' }
        ],
        couple: {
          id: 8, name: 'Carlos', lastName: 'Arana', phone: [
            { name: 'trabajo', phone: 5512345678, extension: 123 },
            { name: 'personal', phone: 5512345678, principal: true }
          ],
          canCall: true, canText: false, sex: 'masculino', prefix: 'sr.', maried: true, sonsNumber: 2,
          work: { jobPosition: 'profesor', jobPlace: 'escom', jobAddress: 'Unidad Profesional Adolfo López Mateos, 07320 Ciudad de México, CDMX' }
        },
        work: { jobPosition: 'asistente', jobPlace: 'escom', jobAddress: 'Unidad Profesional Adolfo López Mateos, 07320 Ciudad de México, CDMX' }
      },
      {
        id: 9, name: 'Asuzena', lastName: 'Martinez', phone: [
          { name: 'trabajo', phone: 5512345678, extension: 123 },
          { name: 'personal', phone: 5512345678, principal: true }
        ],
        canCall: true, canText: true, sex: 'mujer', prefix: 'sra.', maried: true, sonsNumber: 2,
        sons: [
          { id: 1, active: false, name: 'Carlos', lastName: 'Arana', secondLastName: 'Martinez', birthday: '2018-10-07' },
          { id: 2, active: true, name: 'Asuzena', lastName: 'Arana', secondLastName: 'Martinez', birthday: '2020-10-07' }
        ],
        couple: {
          id: 10, name: 'Carlos', lastName: 'Arana', phone: [
            { name: 'trabajo', phone: 5512345678, extension: 123 },
            { name: 'personal', phone: 5512345678, principal: true }
          ],
          canCall: true, canText: false, sex: 'masculino', prefix: 'sr.', maried: true, sonsNumber: 2,
          work: { jobPosition: 'profesor', jobPlace: 'escom', jobAddress: 'Unidad Profesional Adolfo López Mateos, 07320 Ciudad de México, CDMX' }
        },
        work: { jobPosition: 'asistente', jobPlace: 'escom', jobAddress: 'Unidad Profesional Adolfo López Mateos, 07320 Ciudad de México, CDMX' }
      },
      {
        id: 11, name: 'Asuzena', lastName: 'Martinez', phone: [
          { name: 'trabajo', phone: 5512345678, extension: 123 },
          { name: 'personal', phone: 5512345678, principal: true }
        ],
        canCall: true, canText: true, sex: 'mujer', prefix: 'sra.', maried: true, sonsNumber: 2,
        sons: [
          { id: 1, active: false, name: 'Carlos', lastName: 'Arana', secondLastName: 'Martinez', birthday: '2018-10-07' },
          { id: 2, active: true, name: 'Asuzena', lastName: 'Arana', secondLastName: 'Martinez', birthday: '2020-10-07' }
        ],
        couple: {
          id: 12, name: 'Carlos', lastName: 'Arana', phone: [
            { name: 'trabajo', phone: 5512345678, extension: 123 },
            { name: 'personal', phone: 5512345678, principal: true }
          ],
          canCall: true, canText: false, sex: 'masculino', prefix: 'sr.', maried: true, sonsNumber: 2,
          work: { jobPosition: 'profesor', jobPlace: 'escom', jobAddress: 'Unidad Profesional Adolfo López Mateos, 07320 Ciudad de México, CDMX' }
        },
        work: { jobPosition: 'asistente', jobPlace: 'escom', jobAddress: 'Unidad Profesional Adolfo López Mateos, 07320 Ciudad de México, CDMX' }
      },
      {
        id: 13, name: 'Asuzena', lastName: 'Martinez', phone: [
          { name: 'trabajo', phone: 5512345678, extension: 123 },
          { name: 'personal', phone: 5512345678, principal: true }
        ],
        canCall: true, canText: true, sex: 'mujer', prefix: 'sra.', maried: true, sonsNumber: 2,
        sons: [
          { id: 1, active: false, name: 'Carlos', lastName: 'Arana', secondLastName: 'Martinez', birthday: '2018-10-07' },
          { id: 2, active: true, name: 'Asuzena', lastName: 'Arana', secondLastName: 'Martinez', birthday: '2020-10-07' }
        ],
        couple: {
          id: 14, name: 'Carlos', lastName: 'Arana', phone: [
            { name: 'trabajo', phone: 5512345678, extension: 123 },
            { name: 'personal', phone: 5512345678, principal: true }
          ],
          canCall: true, canText: false, sex: 'masculino', prefix: 'sr.', maried: true, sonsNumber: 2,
          work: { jobPosition: 'profesor', jobPlace: 'escom', jobAddress: 'Unidad Profesional Adolfo López Mateos, 07320 Ciudad de México, CDMX' }
        },
        work: { jobPosition: 'asistente', jobPlace: 'escom', jobAddress: 'Unidad Profesional Adolfo López Mateos, 07320 Ciudad de México, CDMX' }
      },
      {
        id: 15, name: 'Asuzena', lastName: 'Martinez', phone: [
          { name: 'trabajo', phone: 5512345678, extension: 123 },
          { name: 'personal', phone: 5512345678, principal: true }
        ],
        canCall: true, canText: true, sex: 'mujer', prefix: 'sra.', maried: true, sonsNumber: 2,
        sons: [
          { id: 1, active: false, name: 'Carlos', lastName: 'Arana', secondLastName: 'Martinez', birthday: '2018-10-07' },
          { id: 2, active: true, name: 'Asuzena', lastName: 'Arana', secondLastName: 'Martinez', birthday: '2020-10-07' }
        ],
        couple: {
          id: 16, name: 'Carlos', lastName: 'Arana', phone: [
            { name: 'trabajo', phone: 5512345678, extension: 123 },
            { name: 'personal', phone: 5512345678, principal: true }
          ],
          canCall: true, canText: false, sex: 'masculino', prefix: 'sr.', maried: true, sonsNumber: 2,
          work: { jobPosition: 'profesor', jobPlace: 'escom', jobAddress: 'Unidad Profesional Adolfo López Mateos, 07320 Ciudad de México, CDMX' }
        },
        work: { jobPosition: 'asistente', jobPlace: 'escom', jobAddress: 'Unidad Profesional Adolfo López Mateos, 07320 Ciudad de México, CDMX' }
      },
      {
        id: 17, name: 'Asuzena', lastName: 'Martinez', phone: [
          { name: 'trabajo', phone: 5512345678, extension: 123 },
          { name: 'personal', phone: 5512345678, principal: true }
        ],
        canCall: true, canText: true, sex: 'mujer', prefix: 'sra.', maried: true, sonsNumber: 2,
        sons: [
          { id: 1, active: false, name: 'Carlos', lastName: 'Arana', secondLastName: 'Martinez', birthday: '2018-10-07' },
          { id: 2, active: true, name: 'Asuzena', lastName: 'Arana', secondLastName: 'Martinez', birthday: '2020-10-07' }
        ],
        couple: {
          id: 18, name: 'Carlos', lastName: 'Arana', phone: [
            { name: 'trabajo', phone: 5512345678, extension: 123 },
            { name: 'personal', phone: 5512345678, principal: true }
          ],
          canCall: true, canText: false, sex: 'masculino', prefix: 'sr.', maried: true, sonsNumber: 2,
          work: { jobPosition: 'profesor', jobPlace: 'escom', jobAddress: 'Unidad Profesional Adolfo López Mateos, 07320 Ciudad de México, CDMX' }
        },
        work: { jobPosition: 'asistente', jobPlace: 'escom', jobAddress: 'Unidad Profesional Adolfo López Mateos, 07320 Ciudad de México, CDMX' }
      },
      {
        id: 19, name: 'Asuzena', lastName: 'Martinez', phone: [
          { name: 'trabajo', phone: 5512345678, extension: 123 },
          { name: 'personal', phone: 5512345678, principal: true }
        ],
        canCall: true, canText: true, sex: 'mujer', prefix: 'sra.', maried: true, sonsNumber: 2,
        sons: [
          { id: 1, active: false, name: 'Carlos', lastName: 'Arana', secondLastName: 'Martinez', birthday: '2018-10-07' },
          { id: 2, active: true, name: 'Asuzena', lastName: 'Arana', secondLastName: 'Martinez', birthday: '2020-10-07' }
        ],
        couple: {
          id: 20, name: 'Carlos', lastName: 'Arana', phone: [
            { name: 'trabajo', phone: 5512345678, extension: 123 },
            { name: 'personal', phone: 5512345678, principal: true }
          ],
          canCall: true, canText: false, sex: 'masculino', prefix: 'sr.', maried: true, sonsNumber: 2,
          work: { jobPosition: 'profesor', jobPlace: 'escom', jobAddress: 'Unidad Profesional Adolfo López Mateos, 07320 Ciudad de México, CDMX' }
        },
        work: { jobPosition: 'asistente', jobPlace: 'escom', jobAddress: 'Unidad Profesional Adolfo López Mateos, 07320 Ciudad de México, CDMX' }
      },
      {
        id: 21, name: 'Asuzena', lastName: 'Martinez', phone: [
          { name: 'trabajo', phone: 5512345678, extension: 123 },
          { name: 'personal', phone: 5512345678, principal: true }
        ],
        canCall: true, canText: true, sex: 'mujer', prefix: 'sra.', maried: true, sonsNumber: 2,
        sons: [
          { id: 1, active: false, name: 'Carlos', lastName: 'Arana', secondLastName: 'Martinez', birthday: '2018-10-07' },
          { id: 2, active: true, name: 'Asuzena', lastName: 'Arana', secondLastName: 'Martinez', birthday: '2020-10-07' }
        ],
        couple: {
          id: 22, name: 'Carlos', lastName: 'Arana', phone: [
            { name: 'trabajo', phone: 5512345678, extension: 123 },
            { name: 'personal', phone: 5512345678, principal: true }
          ],
          canCall: true, canText: false, sex: 'masculino', prefix: 'sr.', maried: true, sonsNumber: 2,
          work: { jobPosition: 'profesor', jobPlace: 'escom', jobAddress: 'Unidad Profesional Adolfo López Mateos, 07320 Ciudad de México, CDMX' }
        },
        work: { jobPosition: 'asistente', jobPlace: 'escom', jobAddress: 'Unidad Profesional Adolfo López Mateos, 07320 Ciudad de México, CDMX' }
      },
      {
        id: 23, name: 'Asuzena', lastName: 'Martinez', phone: [
          { name: 'trabajo', phone: 5512345678, extension: 123 },
          { name: 'personal', phone: 5512345678, principal: true }
        ],
        canCall: true, canText: true, sex: 'mujer', prefix: 'sra.', maried: true, sonsNumber: 2,
        sons: [
          { id: 1, active: false, name: 'Carlos', lastName: 'Arana', secondLastName: 'Martinez', birthday: '2018-10-07' },
          { id: 2, active: true, name: 'Asuzena', lastName: 'Arana', secondLastName: 'Martinez', birthday: '2020-10-07' }
        ],
        couple: {
          id: 24, name: 'Carlos', lastName: 'Arana', phone: [
            { name: 'trabajo', phone: 5512345678, extension: 123 },
            { name: 'personal', phone: 5512345678, principal: true }
          ],
          canCall: true, canText: false, sex: 'masculino', prefix: 'sr.', maried: true, sonsNumber: 2,
          work: { jobPosition: 'profesor', jobPlace: 'escom', jobAddress: 'Unidad Profesional Adolfo López Mateos, 07320 Ciudad de México, CDMX' }
        },
        work: { jobPosition: 'asistente', jobPlace: 'escom', jobAddress: 'Unidad Profesional Adolfo López Mateos, 07320 Ciudad de México, CDMX' }
      }
    ];

    this.parentsTemp = this.parents;
    this.defaultPaginator.pageCount = Math.ceil(this.parents.length / 10);
    this.paginate(this.defaultPaginator);
  }

  paginate(event$: any): void {
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
    const _parents = this.parentsTemp.slice(event$.first, (event$.rows * (event$.page + 1)));
    this.parents = _parents;
  }

  customSort(event$: SortEvent) {
    this.customSortService.customSort(event$);
  }

  filtersAction(event$: any): void {
    if (event$) {
      debugger
    } else {
      setTimeout(() => {
        this._getFiltersOptions();
      }, 1);
    }
  }

  onRowSelect(event$: any): void {
    this.router.navigate([`/parents/personal-info/${event$.data.id}`], { relativeTo: this.route });
  }
}
