import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpService } from '../../core/services/http.service';
import { Observable } from 'rxjs';

export interface ServiceI {

}

@Injectable()
export class ServicesService {
    private readonly baseUrl = `${environment.baseUrl}/admin/consumers`;

    constructor(private http: HttpService) { }

    getAllServices(): Observable<any[]> {
        return this.http.get<any[]>(this.baseUrl);
    }

    createService(application: any): Observable<any> {
        return this.http.post<any>(this.baseUrl, application);
    }

    deleteService(id: any): Observable<any> {
        return this.http.delete<void>(`${environment.baseUrl}/${id}`);
    }

}
