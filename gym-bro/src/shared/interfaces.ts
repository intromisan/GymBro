export interface IUserRegistration {
  email: string;
  password: string;
  name?: string;
}

export interface IUserResponse {
  email: string;
  token: string;
}
