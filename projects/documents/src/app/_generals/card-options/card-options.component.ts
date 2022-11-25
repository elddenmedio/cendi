import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardOptionInterface } from '../../_interfaces/card-options';


@Component({
  selector: 'opera-card-options',
  templateUrl: './card-options.component.html',
  styleUrls: ['./card-options.component.scss']
})
export class CardOptionsComponent implements OnInit {

  @Input() settingCards!: CardOptionInterface[];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  cardAction(buttonAction: string): void {
    this.router.navigate([`/${buttonAction}`]);
  }
}
