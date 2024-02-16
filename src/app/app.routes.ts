import { Routes } from '@angular/router';
import {Page404Component} from "./components/body/page404/page404.component";
import {ProfileComponent} from "./components/body/profile/profile.component";
import {RegisterComponent} from "./components/body/register/register.component";
import {LoginComponent} from "./components/body/login/login.component";
import {HomeComponent} from "./components/body/home/home.component";
import {LoggedInGuard} from "./guards/loggedInGuard/logged-in.guard";

import {NotLoggedInGuard} from "./guards/notLoggedInGuard/not-logged-in.guard";
import {EventComponent} from "./components/body/event/event.component";
import {ReminderComponent} from "./components/body/reminder/reminder.component";
import {ReminderListComponent} from "./components/body/reminder-list/reminder-list.component";
import {EventListComponent} from "./components/body/event-list/event-list.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotLoggedInGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NotLoggedInGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'create_event',
    component: EventComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'update_event/:event_id',
    component: ProfileComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'list_events',
    component: EventListComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'create_reminder',
    component: ReminderComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'update_reminder/:reminder_id',
    component: ReminderComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'list_reminders',
    component: ReminderListComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'reminder',
    component: ReminderComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'event',
    component: EventComponent,
    canActivate: [LoggedInGuard],
  },
  { path: '**', component: Page404Component},
];
