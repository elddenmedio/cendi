import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private http: HttpClient
  ) { }

  getMenu(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>('/v1/menuNavbar');
  }

  getSidebar(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>('/v1/menuSidebar')
  }
}
