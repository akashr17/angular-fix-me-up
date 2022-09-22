import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  currentaccount: any;

  updateCurrentAccount(current: Account){
    this.currentaccount = current;
  }

  getAccounts(): Observable<Account[]> {
    const accounts: Account[] = [
      { id: "1234", balance: 7500, currency: "CAD" },
      { id: "1235", balance: 4500, currency: "CAD" },
      { id: "1236", balance: 2102, currency: "USD" },
    ];
    return of(accounts);
  }
// returns the current account
  retreiveAccount(): Observable<Account>{
    return of(this.currentaccount);
  }
}
