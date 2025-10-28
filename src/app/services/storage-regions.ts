import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpService } from '../core/services/http.service';

export interface StorageRegionI {
  regionCode: string,
  name: string
}

@Injectable()

export class StorageRegions {
  constructor(private http: HttpService) { }

  private readonly baseUrl = `${environment.baseUrl}/admin/api/regions`;

  getAll(): Observable<StorageRegionI[]> {
    return this.http.get<StorageRegionI[]>(this.baseUrl);
  }

  getById(id: number): Observable<StorageRegionI> {
    return this.http.get<StorageRegionI>(this.baseUrl);
  }

  create(customer: StorageRegionI): Observable<StorageRegionI> {
    return this.http.post<StorageRegionI>(this.baseUrl, customer);
  }

  update(id: number, customer: StorageRegionI): Observable<StorageRegionI> {
    return this.http.put<StorageRegionI>(`${this.baseUrl}/${id}`, customer);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
