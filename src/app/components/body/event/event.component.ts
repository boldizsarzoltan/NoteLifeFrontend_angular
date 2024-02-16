import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField
  ],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  date_time: Date = new Date();
  password: string = "";
  username: string = "";

  onRegisterClick() {

  }
}
