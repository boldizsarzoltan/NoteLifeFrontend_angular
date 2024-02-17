import { Injectable } from '@angular/core';
import {ReminderService as HttpReminderService} from "../http/reminder/reminder.service";
import {AuthService} from "../auth/auth.service";
import {Observable} from "rxjs";
import {EventService as HttpEventService} from "../http/event/event.service";
import {EventDelete, EventDeleteResponse, EventListResponse, EventResponse, NewEvent} from "../../types/Event";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private httpEventService: HttpEventService,
  ) {

  }

  create(title: string, description: string, date_time: Date): Observable<EventResponse> {
    let newReminder: NewEvent =  {
      description:description,
      title:title,
      date_time:EventService.convertdate(date_time),
    };
    return this.httpEventService.create(newReminder);
  }

  private static convertdate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero for single-digit months
    const day = String(date.getDate()).padStart(2, '0'); // Add leading zero for single-digit days

    return `${year}-${month}-${day}T00:00:00`;
  }

  getList():Observable<EventListResponse> {
    return this.httpEventService.getList();
  }

  delete(reminderId: BigInt): Observable<EventDeleteResponse> {
    let deleteRequest: EventDelete = { id: reminderId };
    return this.httpEventService.delete(deleteRequest);
  }
}
