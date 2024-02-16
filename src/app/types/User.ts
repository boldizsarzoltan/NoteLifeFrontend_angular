


export interface NewUser {
  user_name: string;
  email: string;
  password: string;
}

export interface User extends NewUser {
  id: bigint;
}

export interface UserResponse extends User {
  success: boolean;
  message: string;
}
