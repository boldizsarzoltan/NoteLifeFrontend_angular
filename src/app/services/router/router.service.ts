import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(
    private router: Router
  ) { }

  redirectToHome(): void {
    this.router.navigate(['/']);
  }

  redirectToProfile(): void {
    this.router.navigate(['/profile']);
  }

  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }
}
