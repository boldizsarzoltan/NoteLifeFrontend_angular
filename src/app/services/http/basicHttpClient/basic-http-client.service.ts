import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {

  }

  getRequest(requestUrl: string, headers: HttpHeaders): Observable<any> {
    return this.http.get<any>(requestUrl, {headers:headers});
  }

  postRequest(requestUrl: string, body: any, headers: HttpHeaders): Observable<any> {
    return this.http.post<any>(requestUrl, body, {headers});
  }

  deleteRequest(requestUrl: string): Observable<any> {
    return this.http.delete(requestUrl);
  }

  patchRequest(requestUrl: string, body: any): Observable<any> {
    return this.http.patch<any>(requestUrl, body);
  }

}
