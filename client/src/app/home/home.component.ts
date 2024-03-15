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

  constructor() {


  }
  ngOnInit(): void {
   
  }

 

  registerToggle() {
    this.registerMode = !this.registerMode;
  }
  cancelRegisterMode($event: boolean) {
    this.registerMode = false;

  }


}
