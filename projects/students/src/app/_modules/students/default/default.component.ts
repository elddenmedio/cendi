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
      { icon: 'pi-user', title: 'alumnos', description: 'Mustra una tabla de todos los alumnos.', buttons: [{ label: 'ver alumnos', styleClass: 'p-button-outlined p-button-rounded', action: 'students/all' }] },
      { icon: 'pi-user-edit', title: 'padres de familia', description: 'Mustra una tabla de todos los padres de familia que sus hijos esten actualmente en el CENDI.', buttons: [{ label: 'ver padres', styleClass: 'p-button-outlined p-button-rounded', action: 'parents' }] },
      { icon: 'pi-inbox', title: 'grupos', description: 'Mustra todos los grupos activos.', buttons: [{ label: 'ver grupos', styleClass: 'p-button-outlined p-button-rounded', action: 'students/groups' }] }
    ]
  }
}
