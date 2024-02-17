import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {ReminderService} from "../../../services/reminder/reminder.service";
import {RouterService} from "../../../services/router/router.service";
import {ReminderResponse} from "../../../types/Reminder";
import {EventService} from "../../../services/event/event.service";
import {EventResponse} from "../../../types/Event";

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput
  ],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  title: string = "";
  description: string = "";
  date_time: Date = new Date();

  constructor(
    private eventService: EventService,
    private routerService: RouterService,
  ) {}

  onCreateClick() {
    this.eventService.create(this.title, this.description, this.date_time).subscribe(
      (eventResponse: EventResponse) => {
        if(!eventResponse.success) {
          alert(eventResponse.message);
          return;
        }
        this.routerService.redirectToEventList();
      }
    );
  }

  canClickCreate(): boolean {
    return this.title.length >=3;
  }
}
