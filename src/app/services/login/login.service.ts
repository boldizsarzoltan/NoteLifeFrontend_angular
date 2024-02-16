import { Injectable } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {LoginService as HttpLoginService} from "../http/login/login.service";
import {map, Observable} from "rxjs";
import {BaseLoginResponse, LoginInformation, LoginResponse} from "../../types/Login";
import {ROLE_USER} from "../../constants";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private httpLogin: HttpLoginService,
    private authService: AuthService,
  ) {

  }

  login(userName: string, password: string): Observable<LoginResponse> {
    let information: LoginInformation = {user_name: userName, password: password};
    return this.httpLogin.login(information).pipe(
      map((response: LoginResponse) => {
        console.log(response);
        if (response.successful) {
          this.authService.setToken(response.access_token);
          this.authService.setRefreshToken(response.refresh_token);
          this.authService.setRole(ROLE_USER);
          return response;
        }
        return response;
      })
    );
  }

  logout(): void {
    if (!this.authService.isLoggedIn()) {
      return;
    }
    this.authService.resetRole();
    this.authService.resetToken();
    this.authService.resetResreshToken();
  }
}
