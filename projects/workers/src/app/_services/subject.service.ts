import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubjectsInterface } from '../_interfaces/subjects';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(
    private http: HttpClient
  ) { }

  getSubjects(): Observable<SubjectsInterface[]> {
    return this.http.get<SubjectsInterface[]>('v1/subjects');
  }
}
