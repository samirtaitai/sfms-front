import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpService } from '../core/services/http.service';


@Injectable()

export class FileTypes {
  private readonly baseUrl = `${environment.baseUrl}/admin/api/fileTypes`;

  constructor(private http: HttpService) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

}
