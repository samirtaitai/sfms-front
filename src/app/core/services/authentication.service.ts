// core/services/auth-token.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthTokenService {
    private tokenUrl = environment.oidcEndpoint;
    private clientId = environment.oidcClientId;
    private clientSecret = environment.oidcClientSecret;

    private token: string | null = null;

    constructor(private http: HttpClient) { }

    private generateBasicAuthHeader(): HttpHeaders {
        const basicAuth = 'Basic ' + btoa(this.clientId + ':' + this.clientSecret);  // Base64 encode username:password
        return new HttpHeaders({
            'Authorization': basicAuth,
            'Content-Type': 'application/x-www-form-urlencoded',  // Set the content type to JSON
        });
    }

    getToken(): Observable<any> {
        if (this.token) {
            return of(this.token);
        }

        const body = new URLSearchParams();
        body.set('grant_type', 'client_credentials');
        body.set('client_id', this.clientId);
        body.set('client_secret', this.clientSecret);

        const headers = this.generateBasicAuthHeader();

        return this.http.post<any>(`${this.tokenUrl}/token`, body.toString(), { headers }).pipe(
            switchMap((response) => {
                this.token = response.access_token;
                return of(this.token);
            })
        );
    }

    clearToken(): void {
        this.token = null;
    }

}
