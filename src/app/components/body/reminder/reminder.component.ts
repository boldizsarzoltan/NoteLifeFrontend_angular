import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";

@Component({
  selector: 'app-reminder',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField
  ],
  templateUrl: './reminder.component.html',
  styleUrl: './reminder.component.css'
})
export class ReminderComponent {
  username: string = "";
  password: string = "";
  start_time: Date = new Date();

  onRegisterClick() {

  }
}
