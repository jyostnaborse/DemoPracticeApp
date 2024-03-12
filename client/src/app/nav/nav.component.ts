import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { user } from '../_models/user';
import { Observable, of } from 'rxjs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  
  currentUser$ : Observable<user | null> = of(null)

  constructor(private accountService: AccountService, private router: Router) {

  }
  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser(){
    this.currentUser$ = this.accountService.currentUser$;
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: () => 
        this.router.navigateByUrl('/members'),
      error: error => console.log(error),
    });
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/')
   
  }

}
