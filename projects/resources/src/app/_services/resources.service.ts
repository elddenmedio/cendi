import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardOptionInterface } from '../_interfaces/card-options';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(
    private http: HttpClient
  ) { }

  getResourcesFiles(): Observable<CardOptionInterface[]> {
    return this.http.get<CardOptionInterface[]>('/v1/resources')
  }
}
