import {Injectable} from '@angular/core';
import {NewReminder, Reminder, ReminderListResponse, ReminderResponse} from "../../types/Reminder";
import {LoginService as HttpLoginService} from "../http/login/login.service";
import {AuthService} from "../auth/auth.service";
import {ReminderService as HttpReminderService} from "../http/reminder/reminder.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  constructor(
    private httpReminderService: HttpReminderService,
    private authService: AuthService,
  ) {

  }

  create(title: string, description: string, start_time: Date, end_time: Date): Observable<ReminderResponse> {
      let newReminder: NewReminder =  {
        description:description,
        title:title,
        start_time:ReminderService.convertdate(start_time),
        end_time:ReminderService.convertdate(end_time)
      };
      return this.httpReminderService.create(newReminder);
  }

  private static convertdate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero for single-digit months
    const day = String(date.getDate()).padStart(2, '0'); // Add leading zero for single-digit days

    return `${year}-${month}-${day}T00:00:00`;
  }

  getList():Observable<ReminderListResponse> {
    return this.httpReminderService.getList();
  }
}
