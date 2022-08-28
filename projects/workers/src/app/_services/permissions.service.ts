import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PermissionsInterface } from '../_interfaces/permissions';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor(
    private http: HttpClient
  ) { }

  getPermissions(): Observable<PermissionsInterface[]> {
    return this.http.get<PermissionsInterface[]>('v1/permissions');
  }
}
