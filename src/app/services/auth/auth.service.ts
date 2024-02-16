import { Injectable } from '@angular/core';
import {LOCAL_STORAGE_REFRESH_TOKEN, LOCAL_STORAGE_ROLE, LOCAL_STORAGE_TOKEN, ROLE_USER} from "../../constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getToken(): string | null {
    return localStorage.getItem(LOCAL_STORAGE_TOKEN);
  }

  getRole(): string | null {
    return localStorage.getItem(LOCAL_STORAGE_ROLE);
  }

  setRefreshToken(refresh_token: string): void {
    localStorage.setItem(LOCAL_STORAGE_REFRESH_TOKEN, refresh_token);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(LOCAL_STORAGE_REFRESH_TOKEN);
  }

  resetResreshToken(): void {
    localStorage.removeItem(LOCAL_STORAGE_REFRESH_TOKEN);
  }

  setToken(token: string): void {
    localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
  }

  setRole(role: string): void {
    localStorage.setItem(LOCAL_STORAGE_ROLE, role);
  }

  resetToken() {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN);
  }

  resetRole() {
    localStorage.removeItem(LOCAL_STORAGE_ROLE);
  }

  isLoggedIn(): boolean {
    return this.getToken() != null;
  }
}
