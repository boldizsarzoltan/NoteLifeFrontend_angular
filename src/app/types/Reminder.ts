
export interface NewReminder {
  title: string;
  description: string;
  start_time: string;
  end_time: string;
}

export interface Reminder extends  NewReminder {
  id:BigInt;
}
