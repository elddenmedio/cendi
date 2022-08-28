import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { SecureLocalService } from 'secure-local';
import { CenterInterface } from '../../../_interfaces/center';
import { GroupsInterface } from '../../../_interfaces/groups';
import { PermissionsInterface } from '../../../_interfaces/permissions';
import { PositionInterface } from '../../../_interfaces/positions';
import { SendUserInterface } from '../../../_interfaces/send-user';
import { SubjectsInterface } from '../../../_interfaces/subjects';
import { UserInterface } from '../../../_interfaces/user';
import { CenterService } from '../../../_services/center.service';
import { GroupsService } from '../../../_services/groups.service';
import { PermissionsService } from '../../../_services/permissions.service';
import { PositionsService } from '../../../_services/positions.service';
import { SubjectService } from '../../../_services/subject.service';
import { WorkersService } from '../../../_services/workers.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit, OnDestroy {

  positions!: PositionInterface[];
  subjects!: SubjectsInterface[];
  permissions!: PermissionsInterface[];
  centers!: CenterInterface[];
  groups!: GroupsInterface[];

  workerID!: number;

  user!: UserInterface;
  userEdit!: UserInterface;

  activeForm: boolean = false;

  userForm: FormGroup = new FormGroup({
    uID: new FormControl(''),
    name: new FormControl('', { validators: [Validators.required] }),
    last_name: new FormControl('', { validators: [Validators.required] }),
    second_last_name: new FormControl('', { validators: [] }),
    mail: new FormGroup({
      mail_personal: new FormControl('', { validators: [Validators.email] }),
      mail_work: new FormControl('', { validators: [Validators.email] })
    }),
    center: new FormGroup({
      center_name: new FormControl('', { validators: [] }),
      permission: new FormControl('', { validators: [] }),
      position: new FormControl('', { validators: [Validators.required] }),
      group: new FormControl('', { validators: [] }),
      subject: new FormControl('', { validators: [] }),
      time_from: new FormControl('', { validators: [Validators.required] }),
      time_to: new FormControl('', { validators: [Validators.required] }),
      time_break: new FormControl('', { validators: [Validators.required] })
    })
  });

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', { validators: [Validators.required] }),
    password: new FormControl('', { validators: [Validators.required] })
  });

  skeleton: boolean = true;
  blockedPanel: boolean = false;

  private unSubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private workerService: WorkersService,
    private positionsServices: PositionsService,
    private subjectsServices: SubjectService,
    private permissionsServices: PermissionsService,
    private centersServices: CenterService,
    private secureLocalService: SecureLocalService,
    private groupsSevices: GroupsService,
    private messageService: MessageService
  ) {
    this.route.params.subscribe(params => {
      if (params['workerID']) {
        this.workerID = params['workerID'];
        this._getUserInfo();
      }
    });

    this.userEdit = this.secureLocalService.getStorage('user')?.value;
  }

  ngOnInit(): void {
    const _url = this.router.url.split('/');
    if (_url[_url.length - 1] == 'add-worker' || _url[_url.length - 1] == 'edit-worker') {
      this.setEdit(true);
    }
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next(true);
    this.unSubscribe$.unsubscribe();
  }

  private _getUserInfo(): void {
    this.workerID;
    this.workerService.getWorkerByID(this.workerID)
      .pipe(takeUntil(this.unSubscribe$)).subscribe(
        user => {
          this.user = user;
          this.skeleton = false;
        },
        err => {
          debugger
        }
      );
  }

  setEdit(defaultEdit?: boolean): void {
    this.activeForm = (defaultEdit) ?? !this.activeForm;
    if (this.activeForm) {
      this._getCatalogs();
    }
    if (this.user) {
      this.userForm.setValue({
        uID: this.user.uID,
        name: this.user.name ?? '',
        last_name: this.user.last_name ?? '',
        second_last_name: this.user?.second_last_name ?? '',
        mail: {
          mail_personal: this.user.mail?.mail_personal ?? '',
          mail_work: this.user.mail?.mail_work ?? ''
        },
        center: {
          center_name: '',
          permission: this.user.level.level,
          position: '',
          group: '',
          subject: '',
          time_from: new Date(this.user.center?.check_in ?? ''),
          time_to: new Date(this.user.center?.check_out ?? ''),
          time_break: new Date(this.user.center?.check_break ?? '')
        }
      });
      this.loginForm.setValue({
        username: this.user?.username,
        password: '********'
      });
    }
  }

  createUpdateWorker(type: number): void {
    this.blockedPanel = true;
    if (type === 1) {
      if (this.userForm.valid) {
        this.userForm.value;
        const _positions = this.positions.find(el => el.value === this.userForm.controls['center'].get('position')?.value);
        const _second_last_name = this.userForm.controls['second_last_name'].value;
        const _mail_work = this.userForm.controls['mail'].get('mail_work')?.value;
        const _worker: SendUserInterface = {
          uID: Number(this.user.uID) ?? null,
          name: this.userForm.controls['name'].value ?? null,
          last_name: this.userForm.controls['last_name'].value ?? null,
          second_last_name: (_second_last_name.length > 2) ? _second_last_name : null,
          mail: {
            mail_personal: this.userForm.controls['mail'].get('mail_personal')?.value ?? null,
            mail_work: (_mail_work.length > 2) ? _mail_work : null
          },
          center: {
            id: this.userForm.controls['center'].get('center_name')?.value ?? null,
            level: 256,
            check_in: this.userForm.controls['center'].get('time_from')?.value ?? null,
            check_out: this.userForm.controls['center'].get('time_to')?.value ?? null,
            check_break: this.userForm.controls['center'].get('time_break')?.value ?? null,
            position: Number(_positions?.value) ?? null,
            positionStyle: _positions?.style ?? '',
            permission: this.userForm.controls['center'].get('permission')?.value ?? null,
            subject: this.userForm.controls['center'].get('subject')?.value ?? null,
            group: this.userForm.controls['center'].get('group')?.value ?? null
          }
        };

        this.secureLocalService.setStorage('blockedPanel', { name: 'blockedPanel', value: true });

        if (this.user) {
          this.workerService.postWorkers([_worker])
            .pipe(takeUntil(this.unSubscribe$)).subscribe(
              succ => {
                this.messageService.add({ key: 'tr', severity: 'success', summary: '', detail: succ });
                //this.secureLocalService.setStorage('toast', { name: 'toast', value: { type: 'success', message: succ } });
              },
              err => {
                debugger
              },
              () => {
                this.blockedPanel = false;
                // this.secureLocalService.setStorage('blockedPanel', { name: 'blockedPanel', value: false });
                this.router.navigate([`/workers/personal-info/${this.user.uID}`], { relativeTo: this.route });
              }
            );
        } else {
          this.workerService.putWorkers([_worker])
            .pipe(takeUntil(this.unSubscribe$)).subscribe(
              succ => {
                this.messageService.add({ key: 'tr', severity: 'success', summary: '', detail: succ });
                //this.secureLocalService.setStorage('toast', { name: 'toast', value: { type: 'success', message: succ } });
              },
              err => {
                debugger
              },
              () => {
                this.blockedPanel = false;
                // this.secureLocalService.setStorage('blockedPanel', { name: 'blockedPanel', value: false });
                this.router.navigate([`/workers`], { relativeTo: this.route });
              }
            );
        }
      }
    } else {

    }
  }

  viewUser(userID: number): void {
    this.router.navigate([`/workers/personal-info/${userID}`], { relativeTo: this.route });
  }

  getInitials(parent: UserInterface): string {
    const _name = parent.name.substring(0, 1);
    const _lastName = parent.last_name?.substring(0, 1);

    return `${_name}${_lastName}`;
  }

  getLabel(): string {
    return (this.user) ? 'Actualizar' : 'Crear';
  }

  private _getCatalogs(): void {
    this._getPositions();
    this._getPermissions();
    this._getCenters();
    this.skeleton = false;
  }

  private _getPositions(): void {
    this.positionsServices.getPositions()
      .pipe(takeUntil(this.unSubscribe$)).subscribe(
        succ => {
          this.positions = succ;
          const _positionID = Number(succ.find(el => el.name === this.secureLocalService.getStorage('user')?.value?.center?.position)?.value);
          if (this.user) this.userForm.controls['center'].get('position')?.setValue(_positionID);
        },
        err => {
          debugger
        }
      );
  }

  private _getPermissions(): void {
    this.permissionsServices.getPermissions()
      .pipe(takeUntil(this.unSubscribe$)).subscribe(
        succ => {
          this.permissions = succ;
        },
        err => {
          debugger
        }
      );
  }

  private _getCenters(): void {
    this.centersServices.getCenters()
      .pipe(takeUntil(this.unSubscribe$)).subscribe(
        succ => {
          this.centers = succ;
          const _centerID = Number(succ.find(el => el.name === this.secureLocalService.getStorage('user')?.value?.center?.name)?.value);
          this.userForm.controls['center'].get('center_name')?.setValue(_centerID);
        },
        err => {
          debugger
        }
      );
  }

  changePosition(event$: number): void {
    if (event$ === 1 || event$ === 2 || event$ === 33) {
      this.subjectsServices.getSubjects()
        .pipe(takeUntil(this.unSubscribe$)).subscribe(
          succ => {
            this.subjects = succ;
          },
          err => {
            debugger
          }
        );
      this.groupsSevices.getGroups()
        .pipe(takeUntil(this.unSubscribe$)).subscribe(
          succ => {
            this.groups = succ;
          },
          err => {
            debugger
          }
        );
    }
  }

  changeSubject(event$: number): void {
    // debugger
    // Validate if this nedd some TODO
  }

  changePermission(event$: number): void {
    // debugger
    // Validate if this nedd some TODO
  }

  changeGroup(event$: number): void {
    // debugger
    // Validate if this nedd some TODO
  }

  changeCenter(event$: any): void {
    // debugger
    // Validate if this nedd some TODO
  }

  hasPermissions(): boolean {
    const _user = this.secureLocalService.getStorage('user');
    return !this.secureLocalService.hasPermission(_user.value.level.level);
  }
}
