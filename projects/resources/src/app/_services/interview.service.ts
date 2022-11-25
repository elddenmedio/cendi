import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateStudentInterface } from '../_interfaces/create-student';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  constructor(
    private http: HttpClient
  ) { }

  putNewInterview(interview: CreateStudentInterface[]): Observable<any> {
    return this.http.put<any>('/v1/interview', interview);
  }
}
