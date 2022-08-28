import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupsInterface } from '../_interfaces/groups';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(
    private http: HttpClient
  ) { }

  getGroups(): Observable<GroupsInterface[]> {
    return this.http.get<GroupsInterface[]>('v1/groups');
  }
}
