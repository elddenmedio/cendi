import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonsDynamicInterface, FormTemplateInterface } from 'dynamic-form';
import { MessageService } from 'primeng/api';
import form_interview_kid_template from 'projects/resources/src/app/_constants/form.interview-kid.const';
import form_interview_parent_template from 'projects/resources/src/app/_constants/form.interview-parent.const';
import { InterviewService } from 'projects/resources/src/app/_services/interview.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit, OnDestroy {

  formStudentTemplate: FormTemplateInterface[] = form_interview_kid_template;
  formStudentBrothersTemplate: FormTemplateInterface[] = form_interview_kid_template;
  formStudentParentTemplate: FormTemplateInterface[] = form_interview_parent_template;

  _service: boolean = true;

  buttonsDynamic!: ButtonsDynamicInterface[];

  addBrother: boolean = false;
  addParent: boolean = false;

  saveButtonStudent: boolean = false;
  saveButtonStudentBrother: boolean = false;
  saveButtonStudentParent1: boolean = false;
  saveButtonStudentParent2: boolean = false;

  formInfo: any[] = [];

  _student: any = {
    name: '',
    last_name: '',
    second_last_name: '',
    born: '',
    group: '',
    observations: { medic: '', dental: '', psychology: '', pedagogy: '', generals: '' },
    brothers: [ { name: '', last_name: '', second_last_name: '', born: '', group: '', observations: { medic: '', dental: '', psychology: '', pedagogy: '',  generals: '' } } ],
    parents: [
      { prefix: '', name: '', last_name: '', second_last_name: '', phone: { personal: '', work: '', ext: '' }, address: '', work: '', observation: '' },
      { prefix: '', name: '', last_name: '', second_last_name: '', phone: { personal: '', work: '', ext: '' }, address: '', work: '', observation: '' }
    ]
  };

  countForm: number = 0;
  tmpCount: number = 0;

  private unSubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private interviewService: InterviewService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next(true);
    this.unSubscribe$.unsubscribe();
  }

  sendSaveForm(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    let _flag: boolean = true;
    this.saveButtonStudent = _flag;
    this.countForm++;
    if (this.addBrother) { this.saveButtonStudentBrother = _flag; this.countForm++; }
    this.saveButtonStudentParent1 = _flag;
    this.countForm++;
    if (this.addParent) { this.saveButtonStudentParent2 = _flag; this.countForm++ }
    setTimeout(() => {
      _flag = false;
      this.saveButtonStudent = _flag;
      this.saveButtonStudentBrother = _flag;
      this.saveButtonStudentParent1 = _flag;
      this.saveButtonStudentParent2 = _flag;
      this.countForm = 0;
    }, 100);
  }

  saveForm(event$: any, step: number): void {
    this.formInfo.push({ step: step, values: event$[0] });
    this._createJSON();
    // this._removeEmpty(this._student);
    if (this.countForm === ++this.tmpCount) {
      console.log(this._student);
      this.interviewService.putNewInterview([this._student])
        .pipe(takeUntil(this.unSubscribe$)).subscribe(
          succ => {
            this.messageService.add({ key: 'tr', severity: 'success', summary: '', detail: succ });
            this.router.navigate([`/students/all`], { relativeTo: this.route });
          }, 
          err => {
            debugger
          }
        );
        this.tmpCount = 0;
    }
  }

  private _createJSON(): void {
    this.formInfo.forEach(
      el => {
        if (el.values) {
          el.values.forEach(
            (item: any) => {
              switch (el.step) {
                case 1:
                  if (item.formControl.includes('observation')) {
                    this._student['observations'][(item.formControl == 'medic_observation' ? 'medic' : (item.formControl === 'dental_observation' ? 'dental' : (item.formControl === 'psychology_observation' ? 'psychology' : item.formControl === 'pedagogy_observation' ? 'pedagogy' : 'generals')))] = item.value;
                  } else {
                    this._student[item.formControl] = item.value;
                  }
                  break;
                case 2:
                  if (item.formControl.includes('observation')) {
                    this._student.brothers[0]['observations'][(item.formControl == 'medic_observation' ? 'medic' : (item.formControl === 'dental_observation' ? 'dental' : (item.formControl === 'psychology_observation' ? 'psychology' : item.formControl === 'pedagogy_observation' ? 'pedagogy' : 'generals')))] = item.value;
                  } else {
                    this._student.brothers[0][item.formControl] = item.value;
                  }
                  break;
                case 3:
                  if (item.formControl.includes('phone')) {
                    this._student.parents[0]['phone'][(item.formControl === 'phone_personal' ? 'personal' : (item.formControl === 'phone_work' ? 'work' : 'ext'))] = item.value;
                  } else {
                    this._student.parents[0][item.formControl] = item.value;
                  }
                  break;
                case 4:
                  if (item.formControl.includes('phone')) {
                    this._student.parents[1]['phone'][(item.formControl === 'phone_personal' ? 'personal' : (item.formControl === 'phone_work' ? 'work' : 'ext'))] = item.value;
                  } else {
                    this._student.parents[1][item.formControl] = item.value;
                  }
                  break;
              }
            }
          );
        }
      }
    );
  }

  private _removeEmpty(obj: any) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != ''));
  }
}
