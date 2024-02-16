import { Component } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {NgIf} from "@angular/common";
import {LoginService} from "../../../services/login/login.service";
import {RouterService} from "../../../services/router/router.service";

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  constructor(
    private authService: AuthService,
    private loginService: LoginService,
    private routeService: RouterService
  ) {}

  onClick() {
    this.loginService.logout();
    this.routeService.redirectToHome();
  }

  loggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
