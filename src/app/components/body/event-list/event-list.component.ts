import { Component } from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {ReminderService} from "../../../services/reminder/reminder.service";
import {RouterService} from "../../../services/router/router.service";
import {ReminderDeleteResponse, ReminderListResponse} from "../../../types/Reminder";
import {EventService} from "../../../services/event/event.service";
import {EventListResponse} from "../../../types/Event";

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef
  ],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {

  displayedColumns: string[] = ['id', 'title', 'date_time', 'customColumn'];
  dataSource:any[] = [];

  constructor(
    private reminderService: EventService,
    private routerService: RouterService,
  ) {}

  ngOnInit() {
    this.getEvents();
  }

  public getEvents() {
    this.reminderService.getList().subscribe(
      (eventListResponse: EventListResponse) => {
        if (!eventListResponse.success) {
          alert(eventListResponse.message);
          return;
        }
        this.dataSource = eventListResponse.list;
      }
    );
  }

  redirectToCreate(): void {
    this.routerService.redirectToEventCreate()
  }

  deleteEvent(reminderId: BigInt): void {
    this.reminderService.delete(reminderId).subscribe(
      (reminderResponse: ReminderDeleteResponse) => {
        if (!reminderResponse.success) {
          alert(reminderResponse.message);
          return;
        }
        this.getEvents();
      }
    );
  }
}
