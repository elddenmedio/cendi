import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddItem } from '../../../_interfaces/add-item';
import { AttendanceComponent } from '../_documents/attendance/attendance.component';
import { KpiStudentComponent } from '../_documents/kpi-student/kpi-student.component';

@Component({
  selector: 'app-crate',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CrateComponent implements OnInit {

  fileType!: string;

  template!: any;

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.fileType = params['documentType'];
    });
  }

  ngOnInit(): void {
    this._getBasicInfo();
  }

  private _getBasicInfo(): void {
    let _component;
    switch (this.fileType) {
      case 'attendance-workers':
      case 'attendance-students':
        _component = new AddItem(AttendanceComponent, { data: 'asistencia' });
        break;
      case 'kpi-student':
        _component = new AddItem(KpiStudentComponent, { data: 'indicadores' });
        break;
    }

    this.template = _component;
  }
}
