import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'opera-table-no-results',
  templateUrl: './table-no-results.component.html',
  styleUrls: ['./table-no-results.component.scss']
})
export class TableNoResultsComponent implements OnInit, OnDestroy {

  private unSubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next(true);
    this.unSubscribe$.unsubscribe();
  }
}
