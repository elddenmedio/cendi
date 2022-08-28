import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgeCalculatorService } from 'general-actions';
import { Subject } from 'rxjs';
import { StudentInterface } from '../../../_interfaces/students';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit, OnDestroy {

  userID!: number;

  student!: StudentInterface;

  private unSubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ageCalculatorService: AgeCalculatorService
  ) {
    this.route.params.subscribe(params => {
      this.userID = params['userID'];
    });
  }

  ngOnInit(): void {
    this._getUserInfo();
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next(true);
    this.unSubscribe$.unsubscribe();
  }

  private _getUserInfo(): void {
    this.userID;
    this.student = {
      id: 0, name: 'Andrea', lastName: 'Apellido', group: 'PIA', birthday: '2018-10-07', avatar: 'onyamalimba.png', brothers: [{ id: 20, name: 'Nombre' }], parents: [
        { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'amyelsner.png', sex: 'femail', title: 'mamá' },
        { id: 1, name: 'Fabiola', lastName: 'Perez', secondLastName: 'Lopez', avatar: 'onyamalimba.png', sex: 'mail', title: 'papá' }
      ],
      teachers: [
        { id: 1, name: 'Cecilia', lastName: 'Ponce', secondLastName: 'Guitierres', avatar: 'amyelsner.png', position: { name: 'titular' } },
        { id: 1, name: 'Vero', lastName: 'Ruiz', secondLastName: 'Guitierres', avatar: 'amyelsner.png', position: { name: 'complementaria' } }
      ],
      partners: [
        {id: 2, name: 'Carlos', lastName: 'Lopez', avatar: 'onyamalimba.png'},
        {id: 3, name: 'Juan', lastName: 'Lopez', avatar: 'onyamalimba.png'},
        {id: 4, name: 'Andrea', lastName: 'Lopez', avatar: 'onyamalimba.png'},
        {id: 5, name: 'Perla', lastName: 'Lopez', avatar: 'onyamalimba.png'},
        {id: 6, name: 'Javier', lastName: 'Lopez', avatar: 'onyamalimba.png'},
        {id: 7, name: 'Agustin', lastName: 'Lopez', avatar: 'onyamalimba.png'}
      ]
      , options: []
    };
  }

  getAge(birthday: any): number {
    return this.ageCalculatorService.getAge(birthday);
  }

  viewParent(parentID: number): void {

  }

  viewWorker(teacherID: number): void {
    this.router.navigate([`/workers/personal-info/${teacherID}`], { relativeTo: this.route });
  }

  viewParner(parnerID: number): void {
    this.router.navigate([`/students/personal-info/${parnerID}`], { relativeTo: this.route });
  }
}
