import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../core/services/http.service';
import { environment } from '../../../environments/environment';

export interface Oes {
  id?: number;
  code: string;
  name: string;
  debtor: number;
}

@Injectable()
export class OesService {
  private readonly baseUrl = `${environment.baseUrl}/admin/oes`;

  constructor(private http: HttpService) {}

  getAll(): Observable<Oes[]> {
    return this.http.get<Oes[]>(this.baseUrl);
  }

  getById(id: number): Observable<Oes> {
    return this.http.get<Oes>(`${this.baseUrl}/${id}`);
  }

  create(oes: Oes): Observable<Oes> {
    return this.http.post<Oes>(this.baseUrl, oes);
  }

  update(id: number, oes: Oes): Observable<Oes> {
    return this.http.put<Oes>(`${this.baseUrl}/${id}`, oes);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}