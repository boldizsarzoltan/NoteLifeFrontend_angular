export interface LoginInformation {
  user_name: string;
  password: string;
}

export interface RefreshToken{
  refresh_token: string;
}

export interface BaseLoginResponse extends RefreshToken{
  token: string;
  role: string;
}

export interface LoginResponse extends BaseLoginResponse {
  message: string;
  successful: boolean;
}
