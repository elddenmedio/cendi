import { Component, OnInit } from '@angular/core';
import { CardOptionInterface } from '../../../_interfaces/card-options';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  cardOptions!: CardOptionInterface[];

  constructor() { }

  ngOnInit(): void {
    this._generateOptionCards();
  }

  private _generateOptionCards(): void {
    this.cardOptions = [
      { icon: 'pi-list', title: 'asistencia maestras', description: 'Toma de asistencia de maestras', buttons: [{ label: 'ver asistencia', styleClass: 'p-button-outlined p-button-rounded', action: 'documents/view-document/attendance-workers' }, { label: 'tomar asistencia', styleClass: 'p-button-rounded', action: 'documents/create-document/attendance-workers' }] },
      { icon: 'pi-list', title: 'asistencia alumnos', description: 'Toma de asistencia de alumnos', buttons: [{ label: 'ver asistencia', styleClass: 'p-button-outlined p-button-rounded', action: 'documents/view-document/attendance-students' }, { label: 'tomar asistencia', styleClass: 'p-button-rounded', action: 'documents/create-document/attendance-students' }] },
      { icon: 'pi-inbox', title: 'indicadores', description: 'Creador de indicadores.', buttons: [{ label: 'ver indicador', styleClass: 'p-button-outlined p-button-rounded', action: 'documents/view-document/kpi-student' }, { label: 'crear indicador', styleClass: 'p-button-rounded', action: 'documents/create-document/kpi-student' }] }
    ]
  }
}
