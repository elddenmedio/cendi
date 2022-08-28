import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../_interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  constructor(
    private http: HttpClient
  ) { }

  getWorkers(page: number, offset: number): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>('v1/workers', { params: { page: page, offset: offset } });
  }

  getWorkerByID(workerID: number): Observable<UserInterface> {
    return this.http.get<UserInterface>('v1/workers', { params: { workerID: workerID, type: 'worker' } });
  }

  putWorkers(worker: any): Observable<any> {
    return this.http.put<any>('v1/workers', worker);
  }

  postWorkers(worker: any): Observable<any> {
    return this.http.post<any>('v1/workers', worker);
  }

  deleteWorkers(workerID: number, active: boolean): Observable<any> {
    return this.http.delete<any>('v1/workers', { params: { workerID: workerID, type: 'worker', active: active } });
  }
}
