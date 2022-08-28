import { Inject, Injectable } from '@angular/core';
import { HttpHandler, HttpRequest, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
// import { SecureLocalService } from 'secure-local';
import { UserInterface } from '../_interfaces/user';

@Injectable({
    providedIn: 'root'
})
export class LanguageInterceptor implements HttpInterceptor {

    constructor(
        // @Inject('environment') private environment: any,
        // private storageService: SecureLocalService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const _user: UserInterface = JSON.parse(sessionStorage.getItem('user') as string)?.value || null;
        let _lang = navigator.language ? navigator.language : 'es'; 
        _lang = (_lang.includes('-')) ? _lang.split('-')[0] : _lang;
        const headers = req.headers
            .set('language', _lang)
            .set('Content-Type', 'application/json')
            .set('User-Level', (_user === null) ? '0' : _user?.level?.level.toString())
        const requestClone = req.clone({ headers });
        return next.handle(requestClone);
    }
}