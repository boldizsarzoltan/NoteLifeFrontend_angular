import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {LoginResponse} from "../../../types/Login";
import {UserService} from "../../../services/user/user.service";
import {RouterService} from "../../../services/router/router.service";
import {UserResponse} from "../../../types/User";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string = "";
  password: string = "";

  constructor(
    private userService: UserService,
    private routerService: RouterService,
  ) { }

  onRegisterClick() {
    this.userService.create(this.username, this.password).subscribe(
      (userResponse: UserResponse) => {
        if(!userResponse.success) {
          alert(userResponse.message);
          return;
        }
        this.routerService.redirectToLogin();
      }
    );
  }

  canLoginClick(): boolean {
    return this.password.length >=4 && this.username.length >=4;
  }
}
