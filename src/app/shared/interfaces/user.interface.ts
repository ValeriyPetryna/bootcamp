export interface UserLogin {
  username: string;
  // email: string;
  password: string;
}
//todo: extend interface

export interface UserData {
  id: string;
  username: string;
  email: string;
  roles: Array<string>;
  accessToken: string
}

export interface TokenData {
  id: string;
  username: string;
  iat: number;
  exp: number;
}