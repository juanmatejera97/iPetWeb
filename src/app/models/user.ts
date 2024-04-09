export interface UserCredentials {
    username: string;
    password: string;
}

export interface User extends UserBase{
    password: string;
    id: string;
}

export interface UserBase {
    name: string;
    surname: string;
    username: string;
    email: string;
    role: string;
    address: string;
  }

export interface Token {
    access_token: string;
    token_type: string;
}
