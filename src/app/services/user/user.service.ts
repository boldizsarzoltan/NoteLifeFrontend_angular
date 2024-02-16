import { Injectable } from '@angular/core';
import {NewUser, User, UserResponse} from "../../types/User";
import {UserService as HttpUserService} from "../http/user/user.service";
import {AuthService} from "../auth/auth.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpUser: HttpUserService,
    private authService: AuthService,
  ) {}

  create(username: string, password: string): Observable<UserResponse> {
    let newUser: NewUser = {user_name: username, password: password, email: username};
    return this.httpUser.create(newUser);
  }

}
