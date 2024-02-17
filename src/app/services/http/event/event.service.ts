import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpService} from "../basicHttpClient/basic-http-client.service";
import {AuthService} from "../../auth/auth.service";
import {EventDelete, EventDeleteResponse, EventListResponse, EventResponse, NewEvent, Event} from "../../../types/Event";
import {catchError, map, Observable, of} from "rxjs";
import {HttpErrorResponse, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EventService {


  private configUrl: string = environment.API_URL + "/event/";

  constructor(
    private http: HttpService,
    private authService: AuthService,
  ) { }

  create(newReminder: NewEvent): Observable<EventResponse> {
    let data = JSON.stringify(newReminder);
    const headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', "*")
      .set('Access-Control-Allow-Headers', "X-Requested-With")
      .set('Authorization', this.authService.getToken() ?? "")
    ;
    return this.http.postRequest(this.configUrl, data, headers)
      .pipe(map((event: Event) => {
          let fullResponse: EventResponse = {
            success: true,
            message: "",
            id:event.id,
            date_time: event.date_time,
            title: event.title,
            description: event.description
          };
          return fullResponse;
        }
      ))
      .pipe(
        catchError(err => {
          return EventService.handleError(err);
        })
      );
  }

  private static handleError(error: HttpErrorResponse): Observable<EventResponse> {
    let fullResponse: EventResponse = {
      success: false,
      message: error.message,
      id:BigInt(0),
      date_time: "",
      title: "",
      description: ""
    };
    return of(fullResponse);
  }

  getList(): Observable<EventListResponse> {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', "*")
      .set('Access-Control-Allow-Headers', "X-Requested-With")
      .set('Authorization', this.authService.getToken() ?? "")
    ;
    return this.http.getRequest(this.configUrl + "all", headers)
      .pipe(map((events: Event[]) => {
          let fullResponse: EventListResponse = {
            success: true,
            message: "",
            list:events
          };
          return fullResponse;
        }
      ))
      .pipe(
        catchError(err => {
          return EventService.handleError2(err);
        })
      );
  }

  private static handleError2(error: HttpErrorResponse): Observable<EventListResponse> {
    let fullResponse: EventListResponse = {
      success: false,
      message: error.message,
      list:[]
    };
    return of(fullResponse);
  }

  delete(deleteRequest: EventDelete): Observable<EventDeleteResponse> {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', "*")
      .set('Access-Control-Allow-Headers', "X-Requested-With")
      .set('Authorization', this.authService.getToken() ?? "")
    ;
    return this.http.deleteRequest(this.configUrl + deleteRequest.id, headers)
      .pipe(map(() => {
          let fullResponse: EventDeleteResponse = {
            success: true,
            message: "",
          };
          return fullResponse;
        }
      ))
      .pipe(
        catchError(err => {
          return EventService.handleError3(err);
        })
      );
  }

  private static handleError3(error: HttpErrorResponse): Observable<EventDeleteResponse> {
    let fullResponse: EventDeleteResponse = {
      success: false,
      message: error.message,
    };
    return of(fullResponse);
  }
}
