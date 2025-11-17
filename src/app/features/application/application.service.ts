import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../core/services/http.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { INTERNAL_ROUTES } from '../../consts/routes';

export interface ApplicationFlow {
  id?: number;
  flowCode: string;
  description: string;
}

export interface ApplicationI {
  id?: any;
  name: string;
  description: string;
  applicationFlows: ApplicationFlow[];
}


@Injectable({ providedIn: "root" })
export class ApplicationService {
  private readonly baseUrl = `${environment.baseUrl}/admin/applications`;
  private applicationDetails!: ApplicationI;

  constructor(private http: HttpService, private router: Router) { }

  getApplicationDetails(): any {
    return this.applicationDetails;
  }

  goToApplicationDetails(application: any) {
    this.applicationDetails = application;
    this.router.navigate([INTERNAL_ROUTES.APPLICATIONS.APPLICATION_DETAILS]);
  }


  getAll(): Observable<ApplicationI[]> {
    return this.http.get<ApplicationI[]>(this.baseUrl);
  }

  getRoles(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.baseUrl}/admin/roles`);
  }

  getServiceActions(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.baseUrl}/admin/services/85651521-f722-4822-bdf0-c1bd4e4fad1d/servicesActions`);
  }

  getRegions(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.baseUrl}/admin/api/regions`);
  }

  getById(id: number): Observable<ApplicationI> {
    return this.http.get<ApplicationI>(`${this.baseUrl}/${id}`);
  }

  create(application: ApplicationI): Observable<ApplicationI> {
    return this.http.post<ApplicationI>(`${this.baseUrl}`, application);
  }

  update(id: number, application: ApplicationI): Observable<ApplicationI> {
    return this.http.put<ApplicationI>(`${this.baseUrl}/${id}`, application);
  }

  delete(id: any): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}