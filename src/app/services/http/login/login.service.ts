import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpService} from "../basicHttpClient/basic-http-client.service";
import {BaseLoginResponse, LoginInformation, LoginResponse} from "../../../types/Login";
import {catchError, map, Observable, of} from "rxjs";
import {HttpErrorResponse, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private configUrl: string = environment.API_URL + "/user/login";

  constructor(
    private http: HttpService,

  ) { }

  login(information: LoginInformation): Observable<LoginResponse> {
    let data = JSON.stringify(information);
    const headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', "*")
      .set('Access-Control-Allow-Headers', "X-Requested-With")
    ;
    return this.http.postRequest(this.configUrl, data, headers)
      .pipe(map((baseLogin: BaseLoginResponse) => {
          let fullResponse: LoginResponse = {
            successful: true,
            access_token: baseLogin.access_token,
            refresh_token: baseLogin.refresh_token,
            message: "",
            role: baseLogin.role
          };
          return fullResponse;
        }
      ))
      .pipe(
        catchError(err => {
          return LoginService.handleError(err);
        })
      );
  }

  private static handleError(error: HttpErrorResponse): Observable<LoginResponse> {
    let message: string = error.message;
    if(error.status === 400 ) {
      message = "Bad credentials";
    }
    console.log(error);
    let fullResponse: LoginResponse = {
      successful: false,
      access_token: "",
      refresh_token: "",
      role: "",
      message: message
    };
    return of(fullResponse);
  }
}
