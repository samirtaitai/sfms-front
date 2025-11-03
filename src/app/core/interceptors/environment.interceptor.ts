import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EnvironmentService } from '../services/environment.service';

@Injectable()
export class EnvironmentInterceptor implements HttpInterceptor {
  constructor(private environmentService: EnvironmentService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.includes('/admin')) {
      return next.handle(req);
    }

    return this.environmentService.getSelectedEnvironment().pipe(
      switchMap((baseUrl: string) => {
        const urlPath = req.url.startsWith('http') ? new URL(req.url).pathname + new URL(req.url).search : req.url;
        const updatedUrl = `${baseUrl}${urlPath}`;
        const modifiedReq = req.clone({ url: updatedUrl });
        return next.handle(modifiedReq);
      })
    );
  }
}

export const environmentInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: EnvironmentInterceptor,
  multi: true,
};