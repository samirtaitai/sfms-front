import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../core/services/http.service';
import { environment } from '../../../environments/environment';

export interface ApplicationFlow {
  id?: number;
  flowCode: string;
  description: string;
  applicationFlows: any[]
}

export interface Application {
  id?: number;
  name: string;
  description: string;
  applicationFlows: ApplicationFlow[];
}


@Injectable()
export class ApplicationService {
  private readonly baseUrl = `${environment.baseUrl}/admin/applications`;

  constructor(private http: HttpService) { }

  getAll(): Observable<Application[]> {
    return this.http.get<Application[]>(this.baseUrl);
  }

  getAllCosumers(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.baseUrl}/admin/consumers`);
  }

  createConsumer(application: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/admin/consumers`, application);
  }

  getRoles(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.baseUrl}/admin/roles`);
  }

  getServiceActions(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.baseUrl}/admin/services/85651521-f722-4822-bdf0-c1bd4e4fad1d/servicesActions`);
  }

  getById(id: number): Observable<Application> {
    return this.http.get<Application>(`${this.baseUrl}/${id}`);
  }

  create(application: Application): Observable<Application> {
    return this.http.post<Application>(`${this.baseUrl}`, application);
  }

  update(id: number, application: Application): Observable<Application> {
    return this.http.put<Application>(`${this.baseUrl}/${id}`, application);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}