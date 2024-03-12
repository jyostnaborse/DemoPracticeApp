import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ThisReceiver } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any={};

  @Output() cancelRegister = new EventEmitter();

  
  constructor(private accountSevice: AccountService, private toastr: ToastrService) {
    
    
  }
  ngOnInit(): void {
   
  }

  register(){
    this.accountSevice.register(this.model).subscribe({
      next: () => this.cancel(),
      error: e => this.toastr.error(e.error)
      
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
