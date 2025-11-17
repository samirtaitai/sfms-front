import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../core/services/http.service';
import { environment } from '../../../environments/environment';
import { INTERNAL_ROUTES } from '../../consts/routes';
import { Router } from '@angular/router';

export interface OesI {
  id?: number;
  code: string;
  name: string;
  debtor: number;
}

@Injectable({providedIn:"root"})
export class OesService {
  private readonly baseUrl = `${environment.baseUrl}/admin/oes`;
  private organizationEntityDetails!: OesI;

  constructor(private http: HttpService, private router: Router) { }

  getOeDetails(): any {
    return this.organizationEntityDetails;
  }

  goToOeDetails(organizationEntity: any) {
    this.organizationEntityDetails = organizationEntity;
    this.router.navigate([INTERNAL_ROUTES.ORG.ORG_DETAILS]);
  }

  getAll(): Observable<OesI[]> {
    return this.http.get<OesI[]>(this.baseUrl);
  }

  getById(id: number): Observable<OesI> {
    return this.http.get<OesI>(`${this.baseUrl}/${id}`);
  }

  create(oes: OesI): Observable<OesI> {
    return this.http.post<OesI>(this.baseUrl, oes);
  }

  update(id: number, oes: OesI): Observable<OesI> {
    return this.http.put<OesI>(`${this.baseUrl}/${id}`, oes);
  }

  delete(id: any): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}