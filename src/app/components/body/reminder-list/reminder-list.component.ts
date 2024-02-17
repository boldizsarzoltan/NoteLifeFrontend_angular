import {Component} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from "@angular/material/table";
import {ReminderDeleteResponse, ReminderListResponse} from "../../../types/Reminder";
import {ReminderService} from "../../../services/reminder/reminder.service";
import {RouterService} from "../../../services/router/router.service";

@Component({
  selector: 'app-reminder-list',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef
  ],
  templateUrl: './reminder-list.component.html',
  styleUrl: './reminder-list.component.css'
})
export class ReminderListComponent {

  displayedColumns: string[] = ['id', 'title', 'start_time', 'end_time', 'customColumn'];
  dataSource:any[] = [];

  constructor(
    private reminderService: ReminderService,
    private routerService: RouterService,
  ) {}

  ngOnInit() {
    this.getReminders();
  }

  public getReminders() {
    this.reminderService.getList().subscribe(
      (reminderResponse: ReminderListResponse) => {
        if (!reminderResponse.success) {
          alert(reminderResponse.message);
          return;
        }
        this.dataSource = reminderResponse.list;
      }
    );
  }

  redirectToCreate(): void {
    this.routerService.redirectToReminderCreate()
  }

  deleteReminder(reminderId: BigInt): void {
    this.reminderService.delete(reminderId).subscribe(
      (reminderResponse: ReminderDeleteResponse) => {
        if (!reminderResponse.success) {
          alert(reminderResponse.message);
          return;
        }
        this.getReminders();
      }
    );
  }
}
