import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgeCalculatorService } from 'general-actions';
import { Subject, takeUntil } from 'rxjs';
import { SecureLocalService } from 'secure-local';
import { StudentInterface } from '../../../_interfaces/students';
import { TeacherInterface } from '../../../_interfaces/teacher';
import { StudentService } from '../../../_services/student.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit, OnDestroy {

  userID!: number;

  student!: StudentInterface;
  partners!: StudentInterface[];
  teacher!: TeacherInterface;

  activeForm: boolean = false;

  skeleton: boolean = true;

  private unSubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ageCalculatorService: AgeCalculatorService,
    private secureLocalServices: SecureLocalService,
    private studentService: StudentService
  ) {
    // this.route.params.subscribe(params => {
    //   this.userID = params['userID'];
    // });
  }

  ngOnInit(): void {
    this._getUserInfo();
  }

  ngOnDestroy(): void {
    this.secureLocalServices.deleteStorage('student');
    this.unSubscribe$.next(true);
    this.unSubscribe$.unsubscribe();
  }

  private _getUserInfo(): void {
    this.student = this.secureLocalServices.getStorage('student') || null;
    if (!this.student) {
      this.router.navigate([`/students/all`], { relativeTo: this.route });
    } else {
      this._getGroupCatalog(this.student);
    }
  }

  private _getGroupCatalog(student: StudentInterface): void {
    this._getTeachers(student);
    this._getPartners(student);
  }

  private _getTeachers(student: StudentInterface): void {
    const _group = student.group?.split('-') || '';
    this.studentService.getTeacherByGroup(_group[_group?.length - 1].trim())
      .pipe(takeUntil(this.unSubscribe$)).subscribe(
        succ => {
          this.teacher = succ;
        },
        err => {
          debugger
        }
      );
  }

  private _getPartners(student: StudentInterface): void {
    const _group = student.group?.split('-') || '';
    this.studentService.getParnesByGroup(_group[_group?.length - 1].trim())
      .pipe(takeUntil(this.unSubscribe$)).subscribe(
        succ => {
          let _partners: StudentInterface[] = [];
          succ.forEach(el => { if (el.sID !== this.student.sID) { _partners.push(el) } });
          this.partners = _partners;
        },
        err => {
          debugger
        },
        () => {
          this.skeleton = false;
        }
      );
  }

  getAge(birthday: any): number {
    return this.ageCalculatorService.getAge(birthday);
  }

  viewWorker(teacherID: number | string): void {
    this.router.navigate([`/workers/personal-info/${teacherID}`]);
  }

  viewParner(parnerID: number): void {
    const _partner = this.partners.find(el => el.sID === parnerID);
    this.secureLocalServices.setStorage('student', _partner);
    this._getUserInfo();
  }

  getInitials(studen: any): string {
    const _name = studen.name.substring(0, 1);
    const _lastName = studen.last_name?.substring(0, 1);

    return `${_name}${_lastName}`;
  }

  setEdit(defaultEdit?: boolean): void {
    this.activeForm = (defaultEdit) ?? !this.activeForm;
  }
}
