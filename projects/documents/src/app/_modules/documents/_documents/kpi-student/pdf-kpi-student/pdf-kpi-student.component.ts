import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'opera-pdf-kpi-student',
  templateUrl: './pdf-kpi-student.component.html',
  styleUrls: ['./pdf-kpi-student.component.scss']
})
export class PdfKpiStudentComponent implements OnInit {

  _tmpArray: any[] = Array.from(Array(33).keys());
  _tmpArray2: any[] = Array.from(Array(23).keys());

  @ViewChild('pdfExport', { static: false }) pdfExport!: ElementRef;

  @Input() values!: any;

  @Input() headerOptions!: any;

  @Output() emitAction: EventEmitter<ElementRef> = new EventEmitter<ElementRef>();

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.emitAction.emit(this.pdfExport);
    }, 100);
  }

}
