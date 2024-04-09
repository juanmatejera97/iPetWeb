import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USERS_URL, USERS_ME_URL } from '../utils/constants';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  public getUsers(){
    return this.http.get<User[]>(USERS_URL);
  }

  public getCurrentUserData(){
    return this.http.get<User>(USERS_ME_URL);
  }
}


