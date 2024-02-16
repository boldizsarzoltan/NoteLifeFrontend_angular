import { Component } from '@angular/core';
import {MenuComponent} from "./menu/menu.component";
import {LogoutComponent} from "./logout/logout.component";
import {NgClass} from "@angular/common";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MenuComponent,
    LogoutComponent,
    NgClass,
    MatToolbar
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
