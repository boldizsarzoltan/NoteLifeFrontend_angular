
export interface NewEvent {
  title: string;
  description: string;
  date_time: string;
}

export interface Event extends  NewEvent {
  id:BigInt;
}
