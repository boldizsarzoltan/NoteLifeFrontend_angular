import { Component } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatMenu,
    MatButton,
    MatMenuItem,
    NgIf,
    MatMenuTrigger
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private authService: AuthService) {}

  notLoggedIn(): boolean {
    return !this.authService.isLoggedIn();
  }

  isNormalUser(): boolean {
    return this.authService.isLoggedIn();
  }
}
