import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  users: any;
  constructor(private httpClient: HttpClient, private accountService: AccountService) {
    
  }
  ngOnInit(): void {
    this.setCurrentUser();
    
  }

 

  setCurrentUser(){
    const user = localStorage.getItem('user')
    if(!user) return;
    this.accountService.setCurrentUser(JSON.parse(user));



  }

}
