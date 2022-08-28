import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilesConst } from '../../../_constants/files.const';
import { AddItem } from '../../../_interfaces/add-item';
import { CorrectionsComponent } from './corrections/corrections.component';
import { InterviewComponent } from './interview/interview.component';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

  fileType!: string;

  template!: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.fileType = params['fileType'];
    });
  }

  ngOnInit(): void {
    this._getBasicInfo();
  }

  private _getBasicInfo(): void {
    let _component;
    switch (this.fileType) {
      case 'corrections':
        _component = new AddItem(CorrectionsComponent, { data: FilesConst.corrections });
        break;
      case 'interview':
        _component = new AddItem(InterviewComponent, { data: FilesConst.corrections });
        break;
    }

    this.template = _component;
  }
}
