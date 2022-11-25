import { Component, ComponentFactoryResolver, ComponentRef, ElementRef, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { ButtonsDynamicInterface, FormTemplateInterface } from 'dynamic-form';
import { ExportInterface } from 'general-actions';
import { SelectItem } from 'primeng/api';
import form_kpi_students_template from 'projects/documents/src/app/_constants/form.kpi_students.const';
import { GroupsInterface } from 'projects/documents/src/app/_interfaces/groups';
import { TotalsLoopByStepPipe } from 'projects/documents/src/app/_pipes/totals-loop-by-step.pipe';
import { TotalsLoopPipe } from 'projects/documents/src/app/_pipes/totals-loop.pipe';
import { TotalsPercentPipe } from 'projects/documents/src/app/_pipes/totals-percent.pipe';
import { GroupService } from 'projects/documents/src/app/_services/group.service';
import { Subject, takeUntil } from 'rxjs';
import { PdfKpiStudentComponent } from './pdf-kpi-student/pdf-kpi-student.component';

@Component({
  selector: 'app-kpi-student',
  templateUrl: './kpi-student.component.html',
  styleUrls: ['./kpi-student.component.scss'],
  providers: [TotalsLoopPipe, TotalsLoopByStepPipe, TotalsPercentPipe]
})
export class KpiStudentComponent implements OnInit, OnDestroy {

  settingsPrintExport: ExportInterface[] = [
    {
      action: 'download',
      title: 'Indicadores CENDI',
      mime: 'pdf',
      orientation: 'landscape',
      unit: 'pt',
      format: 'b5'
    },
    {
      action: 'export',
      title: 'Grupos',
      mime: 'xlsx',
      orientation: 'portrait',
      element: 'printElement'
    }
  ];
  startDownload: boolean = false;
  sendEmitExport!: ElementRef;

  formKpiStudentsTemplate: FormTemplateInterface[] = form_kpi_students_template;

  groups!: GroupsInterface[];
  _tmpArray: any[] = Array.from(Array(30).keys());
  hits: SelectItem[] = [];

  formInfo: any[] = [];
  countForm: number = 0;
  tmpCount: number = 0;
  selectOptions: any[] = [{ type: 'group', value: null }, { type: 'aciertos', value: null }, { type: 'alumnos', value: null }];
  displayForm: number = 0;

  calculateValues: any[] = [{ step: 1, value: [] }, { step: 2, value: [] }, { step: 3, value: [] }, { step: 4, value: [] }, { step: 5, value: [] }];

  buttonsDynamic!: ButtonsDynamicInterface[];

  public windowReference: any;

  private unSubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private groupServices: GroupService,
    private totalsPipe: TotalsLoopPipe,
    private totalsLoopByStepPipe: TotalsLoopByStepPipe,
    private totalsPercentPipe: TotalsPercentPipe,
    private r: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    this._tmpArray.forEach(el => { this.hits.push({ label: el, value: el }) });
    this._getGroups();
    this._initDynamicButtons();
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next(true);
    this.unSubscribe$.unsubscribe();
  }

  private _initDynamicButtons(): void {
    this.buttonsDynamic = [
      { icon: 'pi-plus', class: 'p-button-rounded p-button-outlined p-button-info', action: 'add' }
    ];
  }

  private _getGroups(): void {
    this.groupServices.getGroups()
      .pipe(takeUntil(this.unSubscribe$)).subscribe(
        succ => {
          this.groups = succ;
        },
        err => {
          debugger
        }
      );
  }

  saveForm(event$: any, step: number): void {
    this.formInfo.push({ step: step, values: event$[0] });
    // this._createJSON();

    if (this.countForm === ++this.tmpCount) {
      // console.log(this._student);
      // this.interviewService.putNewInterview([this._student])
      //   .pipe(takeUntil(this.unSubscribe$)).subscribe(
      //     succ => {
      //       this.messageService.add({ key: 'tr', severity: 'success', summary: '', detail: succ });
      //       this.router.navigate([`/students/all`], { relativeTo: this.route });
      //     }, 
      //     err => {
      //       debugger
      //     }
      //   );
      //   this.tmpCount = 0;
    }
  }

  setSelect(opt: string, event$: any): void {
    this.selectOptions.forEach(el => {
      if (el.type == opt) {
        el.value = event$;
        this.displayForm++;
      }
    });
  }

  sendForm(): void {
    console.log(this.calculateValues);
  }

  setIndividualValue(event$: any, position: number): void {
    this.calculateValues.forEach(el => {
      if (el.step == position) {
        el.value.push(event$);
      }
    });
  }

  getTotalByStep(step: number): number[] {
    return this.totalsLoopByStepPipe.transform(this.calculateValues, step);
  }

  getTotalAcquired(step: number, position: number): number {
    return Number(this.totalsPipe.transform(this.calculateValues, step, position));
  }

  getTotalPercent(step: number, position: number): number {
    return this.totalsPercentPipe.transform(this.getTotalAcquired(step, position), this.selectOptions);
  }

  getEvaluation(step: number, position: number): string {
    const _result = this.getTotalPercent(step, position);
    return (_result > 86) ? 'A' : (_result > 60) ? 'B' : (_result > 10) ? 'C' : '';
  }

  manageAction(event$: any): void {
    if (event$.action === 'download') {
      this.startDownload = true;
    }
  }

  sendPrintExport(event$: any): void {
    this.sendEmitExport = event$;
  }
}
