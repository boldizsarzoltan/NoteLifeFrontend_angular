import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {
  MatDatepicker,
  MatDatepickerInput, MatDatepickerModule,
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker
} from "@angular/material/datepicker";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {MatNativeDateModule} from "@angular/material/core";
import {LoginResponse} from "../../../types/Login";
import {LoginService} from "../../../services/login/login.service";
import {RouterService} from "../../../services/router/router.service";
import {Reminder, ReminderResponse} from "../../../types/Reminder";
import {ReminderService} from "../../../services/reminder/reminder.service";

@Component({
  selector: 'app-reminder',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatInput,
    MatIcon,
    MatDateRangePicker,
    MatDateRangeInput,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './reminder.component.html',
  styleUrl: './reminder.component.css'
})
export class ReminderComponent {

  title: string = "";
  description: string = "";
  start_time: Date = new Date();
  end_time: Date = new Date();

  constructor(
    private reminderService: ReminderService,
    private routerService: RouterService,
  ) {}

  onCreateClick() {
    this.reminderService.create(this.title, this.description, this.start_time, this.end_time).subscribe(
      (reminderResponse: ReminderResponse) => {
        if(!reminderResponse.success) {
          alert(reminderResponse.message);
          return;
        }
        this.routerService.redirectToReminderList();
      }
    );
  }

  canClickCreate(): boolean {
    return this.title.length >=3;
  }
}
