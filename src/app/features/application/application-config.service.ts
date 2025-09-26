import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../core/services/http.service';
import { environment } from '../../../environments/environment';

export interface FlowRole {
  flowId: string;
  role: string;
}

export interface FlowConfig {
  flowId: string;
  action: string;
  type: string;
  fileSize: string;
}

export interface ApplicationConfig {
  id?: number;
  customerId: string;
  orgEntityId: string;
  applicationId: string;
  oidcProvider: string;
  introspectionUrl: string;
  storageRegion: string;
  activated: boolean;
  locked: boolean;
  flowRoles: FlowRole[];
  flowsConfig: FlowConfig[];
}

@Injectable()
export class ApplicationConfigService {
  private readonly baseUrl = `${environment.baseUrl}/application-configs`;

  constructor(private http: HttpService) {}

  getAll(): Observable<ApplicationConfig[]> {
    return this.http.get<ApplicationConfig[]>(this.baseUrl);
  }

  getById(id: number): Observable<ApplicationConfig> {
    return this.http.get<ApplicationConfig>(`${this.baseUrl}/${id}`);
  }

  create(config: ApplicationConfig): Observable<ApplicationConfig> {
    return this.http.post<ApplicationConfig>(this.baseUrl, config);
  }

  update(id: number, config: ApplicationConfig): Observable<ApplicationConfig> {
    return this.http.put<ApplicationConfig>(`${this.baseUrl}/${id}`, config);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}