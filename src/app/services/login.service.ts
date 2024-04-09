import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Token, User, UserCredentials } from '../models/user';

import { USERS_URL, USER_TOKEN_URL } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
  ) { }


  public setToken(token: string){
    this.localStorageService.addItemToLocalStorage("token", token);
    console.log("dentro", token)
  }

  public getToken(){
    return this.localStorageService.getItemFromLocalStorage("token");
  }

  public requestToken(username: UserCredentials['username'], password: UserCredentials['password']){
    const headers = new HttpHeaders({
      accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const body = new URLSearchParams();
    body.set('grant_type', 'password');
    body.set('username', username);
    body.set('password', password);
    body.set('scope', '');
    body.set('client_id', '');
    body.set('client_secret', '');

    return this.http.post<Token>(USER_TOKEN_URL, body, { headers: headers });  
  }

  public clearData(){
    this.localStorageService.clearStorage();  
  }

  public isLoggedIn(): boolean{
    return this.getToken() != null;
  }

  public createUser(user: User){
    return this.http.post<User>(USERS_URL, user);
  }


}
