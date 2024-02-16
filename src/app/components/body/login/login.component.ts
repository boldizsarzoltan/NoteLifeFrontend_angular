import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {AuthService} from "../../../services/auth/auth.service";
import {LoginService} from "../../../services/login/login.service";
import {RouterService} from "../../../services/router/router.service";
import {LoginResponse} from "../../../types/Login";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  password: string = "";
  username: string = "";

  constructor(
    private loginService: LoginService,
    private routerService: RouterService,
  ) {}

  onLoginClick() {
    this.loginService.login(this.username, this.password).subscribe(
      (loginResponse: LoginResponse) => {
        if(!loginResponse.successful) {
          alert(loginResponse.message);
          return;
        }
        this.routerService.redirectToProfile();
      }
    );
  }

  canLoginClick(): boolean {
    return this.password.length >=4 && this.username.length >=4;
  }
}
