
export interface NewReminder {
  title: string;
  description: string;
  start_time: string;
  end_time: string;
}

export interface Reminder extends  NewReminder {
  id:BigInt;
}

export interface ReminderResponse extends  Reminder {
  success:boolean;
  message:string;
}

export interface ReminderListResponse {
  list:Reminder[];
  success:boolean;
  message:string;
}
