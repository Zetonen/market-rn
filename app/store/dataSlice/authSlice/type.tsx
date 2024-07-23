export interface InitialState {
  accessToken: string | null;
  isAuthenticated: boolean;
  userName: string;
  userEmail: string;
}
export type Token = string | null;
export interface IRegister {
  email: string;
  password: string;
  userName: string;
}
export interface ILogin {
  email: string;
  password: string;
}
