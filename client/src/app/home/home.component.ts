import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { user } from '../_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: any;

  constructor(private httpclient: HttpClient) {


  }
  ngOnInit(): void {
    //this.getUser();
  }

  getUser() {
    this.httpclient.get("https://localhost:5001/api/users").subscribe({
      next: response => this.users = response,
      error: error => console.error(error),
    })

  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }
  cancelRegisterMode($event: boolean) {
    this.registerMode = false;

  }


}
