import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TrackingService {

    //URL_API: string = 'http://localhost/api';
    URL_API: string = 'https://restcountries.eu/rest/v2/all';

    constructor(private http: HttpClient) { }

    searchByCodeTracking(code: string): Observable<any>{
        let body = JSON.stringify({ codigo_correspondencia: code });
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers: headers };
        //return this.http.post(`${this.URL_API}/datosLog/`, body, options);
        return this.http.get(this.URL_API);
    }
}
