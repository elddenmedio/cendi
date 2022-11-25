import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'opera-skeleton-table',
  templateUrl: './skeleton-table.component.html',
  styleUrls: ['./skeleton-table.component.scss']
})
export class SkeletonTableComponent implements OnInit {

  tmp: any[] = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
