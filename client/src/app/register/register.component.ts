import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any={};

  @Output() cancelRegister = new EventEmitter();

  
  constructor(private accountSevice: AccountService) {
    
    
  }
  ngOnInit(): void {
   
  }

  register(){
    this.accountSevice.register(this.model).subscribe({
      next: () => this.cancel()
      
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
