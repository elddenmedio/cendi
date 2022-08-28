import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ParentInterface } from '../../../_interfaces/parents';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit, OnDestroy {

  parentID!: number;

  parent!: ParentInterface;

  private unSubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params => {
      this.parentID = params['parentID'];
    });
  }

  ngOnInit(): void {
    this._getParentInfo();
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next(true);
    this.unSubscribe$.unsubscribe();
  }

  private _getParentInfo(): void {
    this.parentID;
    this.parent = {
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
    };
  }

  getInitials(parent: ParentInterface): string {
    const _name = parent.name.substring(0, 1);
    const _lastName = parent.lastName?.substring(0, 1);

    return `${_name}${_lastName}`;
  }
}
