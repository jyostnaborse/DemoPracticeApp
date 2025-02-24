import { CanActivateFn } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { Inject, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);
  const toastr = inject(ToastrService);



  return accountService.currentUser$.pipe(
    map(user => {
      if (user) return true
      else {
        console.log('in toast error');
        toastr.error('Please login');
        return false;
      }
    })
  );
};
