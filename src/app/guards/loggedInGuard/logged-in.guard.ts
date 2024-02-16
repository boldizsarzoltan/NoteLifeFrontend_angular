import {ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

  constructor(private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.authService.isLoggedIn();
  }
}
