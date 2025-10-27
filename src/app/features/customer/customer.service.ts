import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../core/services/http.service';
import { environment } from '../../../environments/environment';

export interface Customer {
    id?: number;
    name: string;
    description: string;
}

@Injectable()

export class CustomerService {
    constructor(private http: HttpService) { }


    getAll(): Observable<Customer[]> {
        return this.http.get<Customer[]>(environment.baseUrl + '/admin/customers');
    }

    getById(id: number): Observable<Customer> {
        return this.http.get<Customer>(`${environment.baseUrl + '/admin/customers'}/${id}`);
    }

    create(customer: Customer): Observable<Customer> {
        return this.http.post<Customer>(environment.baseUrl + '/admin/customers', customer);
    }

    update(id: number, customer: Customer): Observable<Customer> {
        return this.http.put<Customer>(`${environment.baseUrl + '/admin/customers'}/${id}`, customer);
    }

    delete(id: string): Observable<void> {
        return this.http.delete<void>(`${environment.baseUrl + '/admin/customers'}/${id}`);
    }
}