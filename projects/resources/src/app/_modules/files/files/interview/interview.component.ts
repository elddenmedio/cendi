import { Component, OnInit } from '@angular/core';
import { ButtonsDynamicInterface, FormTemplateInterface } from 'dynamic-form';
import form_interview_kid_template from 'projects/resources/src/app/_constants/form.interview-kid.const';
import form_interview_parent_template from 'projects/resources/src/app/_constants/form.interview-parent.const';
import { CreateStudentInterface } from 'projects/resources/src/app/_interfaces/create-student';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit {

  formStudentTemplate: FormTemplateInterface[] = form_interview_kid_template;
  formStudentBrothersTemplate: FormTemplateInterface[] = form_interview_kid_template;
  formStudentParentTemplate: FormTemplateInterface[] = form_interview_parent_template;

  _service: boolean = true;

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
    observations: {
      medic: '',
      dental: '',
      psychology: '',
      pedagogy: '',
      generals: ''
    },
    brothers: [
      {
        name: '',
        last_name: '',
        second_last_name: '',
        born: '',
        group: '',
        observations: {
          medic: '',
          dental: '',
          psychology: '',
          pedagogy: '',
          generals: ''
        }
      }
    ],
    parents: [
      {
        prefix: '',
        name: '',
        last_name: '',
        second_last_name: '',
        phone: {
          personal: '',
          work: '',
          ext: ''
        },
        address: '',
        work: '',
        observation: ''
      },
      {
        prefix: '',
        name: '',
        last_name: '',
        second_last_name: '',
        phone: {
          personal: '',
          work: '',
          ext: ''
        },
        address: '',
        work: '',
        observation: ''
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

  sendSaveForm(): void {
    let _flag: boolean = true;
    this.saveButtonStudent = _flag;
    if (this.addBrother) this.saveButtonStudentBrother = _flag;
    this.saveButtonStudentParent1 = _flag;
    if (this.addParent) this.saveButtonStudentParent2 = _flag;
    setTimeout(() => {
      _flag = false;
      this.saveButtonStudent = _flag;
      if (this.addBrother) this.saveButtonStudentBrother = _flag;
      this.saveButtonStudentParent1 = _flag;
      if (this.addParent) this.saveButtonStudentParent2 = _flag;
    }, 100);
  }

  saveForm(event$: any, step: number): void {
    this.formInfo.push({ step: step, values: event$[0] });
    this._createJSON();
    console.log(this._student);
  }

  private _createJSON(): void {
    this.formInfo.forEach(
      el => {
        if (el.values) {
          el.values.forEach(
            (item: any) => {
              switch (el.step) {
                case 1:
                  this._student[item.formControl] = item.value;
                  break;
                case 2:
                  this._student.brothers[1][item.formControl] = item.value;
                  break;
                case 3:
                  this._student.parents[1][item.formControl] = item.value;
                  break;
                case 4:
                  this._student.parents[2][item.formControl] = item.value;
                  break;
              }
            }
          );
        }
      }
    );
  }
}
