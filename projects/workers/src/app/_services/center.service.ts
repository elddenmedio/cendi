import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CenterInterface } from '../_interfaces/center';

@Injectable({
  providedIn: 'root'
})
export class CenterService {

  constructor(
    private http: HttpClient
  ) { }

  getCenters(): Observable<CenterInterface[]> {
    return this.http.get<CenterInterface[]>('v1/center');
  }
}
