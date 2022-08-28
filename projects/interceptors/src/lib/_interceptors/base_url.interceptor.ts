import { Inject, Injectable } from '@angular/core';
import { HttpHandler, HttpRequest, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BaseURLInterceptor implements HttpInterceptor {

    constructor(
        // @Inject('environment') private environment: any
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // if (!req.url.match(/^http(s)?:\/\/(.*)$/)) {
        //     const url = `${environment.base_url}${req.url}`.replace(/([^:]\/)\/+/g, '$1');
        //     req = req.clone({ url });
        // }
        return next.handle(req);
    }
}