import { Injectable } from '@angular/core';
import {NewUser, User, UserResponse} from "../../../types/User";
import {HttpService} from "../basicHttpClient/basic-http-client.service";
import {environment} from "../../../../environments/environment";
import {BaseLoginResponse, LoginInformation, LoginResponse} from "../../../types/Login";
import {HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environment.API_URL + "/user/";

  constructor(private http: HttpService) { }

  create(newUser: NewUser): Observable<UserResponse>  {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', "*")
      .set('Access-Control-Allow-Headers', "X-Requested-With")
    ;
    let data = JSON.stringify(newUser);
    return this.http.postRequest(this.baseUrl, data, headers)
      .pipe(map((user: User) => {
          let fullResponse: UserResponse = {
            email: user.email,
            id: user.id,
            message: "",
            success: true,
            user_name: user.user_name,
            password: user.password
          };
          return fullResponse;
        }
      ))
      .pipe(
        catchError(err => {
          return UserService.handleError(err);
        })
      );
  }

  private static handleError(error: HttpErrorResponse): Observable<UserResponse> {
    let message: string = error.message;
    if(error.status === 400 ) {
      message = "Bad credentials";
    }
    console.log(error);
    let fullResponse: UserResponse = {
      email: "",
      id: BigInt(0),
      message: error.message,
      success: false,
      user_name: "",
      password: ""
    };
    return of(fullResponse);
  }

  deleteUser(id: BigInt): Observable<boolean> {
    return this.http.deleteRequest(this.baseUrl + "delete/" + id).pipe(
      catchError(() =>{
        return of([]);
      })
    ).pipe(
      map(
        res => {
          let result = true;
          if(res != null) {
            result = false;
          }
          return result;
        }
      ));
  }
}
