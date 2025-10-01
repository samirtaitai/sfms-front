// core/interceptors/auth-token.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthTokenService } from '../services/authentication.service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private authTokenService: AuthTokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.includes('/admin')) {
      return next.handle(req);
    }

    return this.authTokenService.getToken().pipe(
      switchMap((token: string) => {
        const cloned = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
            flowcode: 'ADMIN_UI_READ_SERVICE',
            'Content-Type': 'application/json'
          }
        });
        return next.handle(cloned);
      })
    );
  }
}
