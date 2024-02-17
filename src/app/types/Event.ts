
export interface NewEvent {
  title: string;
  description: string;
  date_time: string;
}

export interface Event extends  NewEvent {
  id:BigInt;
}
export interface EventResponse extends  Event {
  success:boolean;
  message:string;
}

export interface EventListResponse {
  list:Event[];
  success:boolean;
  message:string;
}

export interface EventDelete {
  id:BigInt;
}

export interface EventDeleteResponse {
  success:boolean;
  message:string;
}
