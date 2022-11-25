import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { StudentInterface } from '../_interfaces/students';
import { TeacherInterface } from '../_interfaces/teacher';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public students: Subject<StudentInterface[]> = new Subject();

  constructor(
    private http: HttpClient
  ) { }

  getAllStudents(page: number, offset: number): Observable<StudentInterface[]> {
    return this.http.get<StudentInterface[]>('/v1/students', { params: { page: page, center: 1, offset: offset } });
  }

  getParnesByGroup(grouAbbreviation: string): Observable<StudentInterface[]> {
    return this.http.get<StudentInterface[]>('/v1/students', { params: { groupAbb: grouAbbreviation, center: 1 } });
  }

  getTeacherByGroup(grouAbbreviation: string): Observable<TeacherInterface> {
    return this.http.get<TeacherInterface>('/v1/workers', { params: { groupAbb: grouAbbreviation, center: 1 } });
  }
}
