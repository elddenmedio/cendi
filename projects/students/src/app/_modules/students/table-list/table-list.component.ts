import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FilterMasterInterface } from 'filter-opera';
import { AgeCalculatorService, CustomSortService, ExportInterface } from 'general-actions';
import { SortEvent } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { SecureLocalService } from 'secure-local';
import { ParentsInterface } from '../../../_interfaces/parents';
import { StudentInterface } from '../../../_interfaces/students';
import { StudentService } from '../../../_services/student.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit, OnDestroy {

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

  students!: StudentInterface[];
  studentsTemp!: StudentInterface[];

  displayTemplate: boolean = true;

  defaultRows: number = 10;
  defaultPaginator = { first: 0, page: 0, pageCount: 0, rows: 10 };
  totalRows: any = 0;

  skeleton: boolean = true;

  private unSubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ageCalculatorService: AgeCalculatorService,
    private customSortService: CustomSortService,
    private studentServices: StudentService,
    private secureLocalServices: SecureLocalService
  ) { }

  ngOnInit(): void {
    // Filters, get options list to be displayed as filter options
    this._getFiltersOptions();

    // Get all students
    this._getStudents();
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

  private _getStudents(): void {
    this.studentServices.getAllStudents(this.defaultPaginator.page, this.defaultPaginator.rows)
      .pipe(takeUntil(this.unSubscribe$)).subscribe(
        succ => {
          this.students = succ;
          this.studentsTemp = this.students;
          this.defaultPaginator.pageCount = Math.ceil(this.students.length / 10);
        },
        err => {
          debugger
        }, 
        () => {
            this.displayTemplate = false;
        }
      );
    // this.students = [
    //   {
    //     id: 0, name: 'Andrea', lastName: 'Apellido', group: 'PIA', birthday: '2018-10-07', brothers: [{ id: 20, name: 'Nombre' }], parents: [
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'amyelsner.png', sex: 'femail' },
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'onyamalimba.png', sex: 'mail' }
    //     ], options: []
    //   },
    //   {
    //     id: 1, name: 'jorge', lastName: 'Apellido', group: 'MI', birthday: '2018-10-07', parents: [
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'amyelsner.png', sex: 'femail' },
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'onyamalimba.png', sex: 'mail' }
    //     ], options: []
    //   },
    //   {
    //     id: 2, name: 'Alina', lastName: 'Apellido', group: 'PIA', birthday: '2018-10-07', parents: [
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'amyelsner.png', sex: 'femail' },
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'onyamalimba.png', sex: 'mail' }
    //     ], options: []
    //   },
    //   {
    //     id: 3, name: 'Liset', lastName: 'Apellido', group: 'MI', birthday: '2018-10-07', parents: [
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'amyelsner.png', sex: 'femail' },
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'onyamalimba.png', sex: 'mail' }
    //     ], options: []
    //   },
    //   {
    //     id: 4, name: 'Ivan', lastName: 'Apellido', group: 'PIA', birthday: '2018-10-07', parents: [
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'amyelsner.png', sex: 'femail' },
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'onyamalimba.png', sex: 'mail' }
    //     ], options: []
    //   },
    //   {
    //     id: 5, name: 'Erik', lastName: 'Apellido', group: 'MI', birthday: '2018-10-07', parents: [
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'amyelsner.png', sex: 'femail' },
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'onyamalimba.png', sex: 'mail' }
    //     ], options: []
    //   },
    //   {
    //     id: 6, name: 'Danira', lastName: 'Apellido', group: 'PIA', birthday: '2018-10-07', parents: [
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'amyelsner.png', sex: 'femail' },
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'onyamalimba.png', sex: 'mail' }
    //     ], options: []
    //   },
    //   {
    //     id: 7, name: 'Favian', lastName: 'Apellido', group: 'MI', birthday: '2018-10-07', parents: [
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'amyelsner.png', sex: 'femail' },
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'onyamalimba.png', sex: 'mail' }
    //     ], options: []
    //   },
    //   {
    //     id: 8, name: 'Benjamin', lastName: 'Apellido', group: 'PIA', birthday: '2018-10-07', parents: [
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'amyelsner.png', sex: 'femail' },
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'onyamalimba.png', sex: 'mail' }
    //     ], options: []
    //   },
    //   {
    //     id: 9, name: 'Issac', lastName: 'Apellido', group: 'MI', birthday: '2018-10-07', parents: [
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'amyelsner.png', sex: 'femail' },
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'onyamalimba.png', sex: 'mail' }
    //     ], options: []
    //   },
    //   {
    //     id: 10, name: 'Andrea', lastName: 'Apellido', group: 'PIA', birthday: '2018-10-07', parents: [
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'amyelsner.png', sex: 'femail' },
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'onyamalimba.png', sex: 'mail' }
    //     ], options: []
    //   },
    //   {
    //     id: 11, name: 'jorge', lastName: 'Apellido', group: 'MI', birthday: '2018-10-07', parents: [
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'amyelsner.png', sex: 'femail' },
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'onyamalimba.png', sex: 'mail' }
    //     ], options: []
    //   },
    //   {
    //     id: 12, name: 'Alina', lastName: 'Apellido', group: 'PIA', birthday: '2018-10-07', parents: [
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'amyelsner.png', sex: 'femail' },
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'onyamalimba.png', sex: 'mail' }
    //     ], options: []
    //   },
    //   {
    //     id: 13, name: 'Andrea', lastName: 'Apellido', group: 'PIA', birthday: '2018-10-07', parents: [
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'amyelsner.png', sex: 'femail' },
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'onyamalimba.png', sex: 'mail' }
    //     ], options: []
    //   },
    //   {
    //     id: 14, name: 'jorge', lastName: 'Apellido', group: 'MI', birthday: '2018-10-07', parents: [
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'amyelsner.png', sex: 'femail' },
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'onyamalimba.png', sex: 'mail' }
    //     ], options: []
    //   },
    //   {
    //     id: 15, name: 'Alina', lastName: 'Apellido', group: 'PIA', birthday: '2018-10-07', parents: [
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'amyelsner.png', sex: 'femail' },
    //       { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'onyamalimba.png', sex: 'mail' }
    //     ], options: []
    //   }
    // ];
  }

  paginate(event$: any): void {
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
    this.skeleton = true;
    this.defaultPaginator.page = event$.page;
    this._getStudents();
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

  getAge(birthday: string): number {
    return this.ageCalculatorService.getAge(birthday);
  }

  onRowSelect(event$: any): void {
    this.secureLocalServices.setStorage('student', event$.data);
    this.router.navigate([`/students/personal-info`], { relativeTo: this.route });
  }

  getInitials(parent: ParentsInterface): string {
    const _name = parent.name.substring(0, 1);
    const _lastName = parent.last_name?.substring(0, 1);

    return `${_name}${_lastName}`;
  }
}
