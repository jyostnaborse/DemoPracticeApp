import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, map } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { user } from '../_models/user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new BehaviorSubject<user | null>(null);
  currentUser$= this.currentUserSource.asObservable();

  constructor(private httpClient: HttpClient) { }

  login(model: any) {
    return this.httpClient.post<user>(this.baseUrl + "account/login", model).pipe(map((response: user) => {
      const user = response;
      if (user) {
        localStorage.setItem('user', JSON.stringify(user))
        this.currentUserSource.next(user)
      }
    })
    )

  }

  setCurrentUser(user: user){
    this.currentUserSource.next(user)
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

  register(model:any){
    return this.httpClient.post<user>(this.baseUrl + "account/register", model).pipe(
      map( user => {
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )

  }
}
