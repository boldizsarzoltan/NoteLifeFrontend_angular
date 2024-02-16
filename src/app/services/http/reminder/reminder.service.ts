import { Injectable } from '@angular/core';
import {BaseLoginResponse, LoginInformation, LoginResponse} from "../../../types/Login";
import {catchError, map, Observable, of} from "rxjs";
import {HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {NewReminder, Reminder, ReminderListResponse, ReminderResponse} from "../../../types/Reminder";
import {environment} from "../../../../environments/environment";
import {HttpService} from "../basicHttpClient/basic-http-client.service";
import {AuthService} from "../../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  private configUrl: string = environment.API_URL + "/reminder/";

  constructor(
    private http: HttpService,
    private authService: AuthService,
  ) { }

  create(newReminder: NewReminder): Observable<ReminderResponse> {
    let data = JSON.stringify(newReminder);
    const headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', "*")
      .set('Access-Control-Allow-Headers', "X-Requested-With")
      .set('Authorization', this.authService.getToken() ?? "")
    ;
    return this.http.postRequest(this.configUrl, data, headers)
      .pipe(map((reminder: Reminder) => {
          let fullResponse: ReminderResponse = {
            success: true,
            message: "",
            id:reminder.id,
            end_time: reminder.end_time,
            start_time: reminder.start_time,
            title: reminder.title,
            description: reminder.description
          };
          return fullResponse;
        }
      ))
      .pipe(
        catchError(err => {
          return ReminderService.handleError(err);
        })
      );
  }

  private static handleError(error: HttpErrorResponse): Observable<ReminderResponse> {
    let fullResponse: ReminderResponse = {
      success: false,
      message: error.message,
      id:BigInt(0),
      end_time: "",
      start_time: "",
      title: "",
      description: ""
    };
    return of(fullResponse);
  }

  getList(): Observable<ReminderListResponse> {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', "*")
      .set('Access-Control-Allow-Headers', "X-Requested-With")
      .set('Authorization', this.authService.getToken() ?? "")
    ;
    return this.http.getRequest(this.configUrl + "all", headers)
      .pipe(map((reminders: Reminder[]) => {
          let fullResponse: ReminderListResponse = {
            success: true,
            message: "",
            list:reminders
          };
          return fullResponse;
        }
      ))
      .pipe(
        catchError(err => {
          return ReminderService.handleError2(err);
        })
      );
  }

  private static handleError2(error: HttpErrorResponse): Observable<ReminderListResponse> {
    let fullResponse: ReminderListResponse = {
      success: false,
      message: error.message,
      list:[]
    };
    return of(fullResponse);
  }
}
