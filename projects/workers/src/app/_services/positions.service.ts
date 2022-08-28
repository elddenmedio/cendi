import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PositionInterface } from '../_interfaces/positions';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  constructor(
    private http: HttpClient
  ) { }

  getPositions(): Observable<PositionInterface[]> {
    return this.http.get<PositionInterface[]>('v1/positions');
  }
}
