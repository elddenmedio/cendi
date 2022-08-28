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
      { icon: 'pi-book', title: 'PI A', subtitle: 'Preescolar I A', buttons: [{ label: 'ver grupo', styleClass: 'p-button-outlined p-button-rounded', action: 'students/groups/view-group/PIA' }] },
      { icon: 'pi-book', title: 'PII A', subtitle: 'Preescolar II A', buttons: [{ label: 'ver grupo', styleClass: 'p-button-outlined p-button-rounded', action: 'students/groups/view-group/PIIA' }] },
      { icon: 'pi-book', title: 'M', subtitle: 'Maternal', buttons: [{ label: 'ver grupo', styleClass: 'p-button-outlined p-button-rounded', action: 'students/groups/view-group/M' }] },
      { icon: 'pi-book', title: 'L', subtitle: 'Lactantes', buttons: [{ label: 'ver grupo', styleClass: 'p-button-outlined p-button-rounded', action: 'students/groups/view-group/L' }] }
    ]
  }
}
