import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TrackingService {

    //URL_API: string = 'http://localhost/api';
    URL_API: string = 'http://hadestest.oopp.gob.bo/marcaciones/api/marcaciones/personal';

    headers= new HttpHeaders(
                                {
                                    'Authorization': '-',
                                    'Content-Type': 'application/json'
                              //'Access-Control-Allow-Headers': '*',
                              //'Access-Control-Allow-Credentials': 'false',
                                }
                            );

    constructor(private http: HttpClient) { }

    searchByCodeTracking(code: string){
        //return this.http.post(`${this.URL_API}/datosLog/`, { 'codigo_correspondencia': code }, { 'headers': this.headers });
        return this.http.post<any>(`${this.URL_API}/${code}/2019/9/`,{},{'headers': this.headers});
    }
}
