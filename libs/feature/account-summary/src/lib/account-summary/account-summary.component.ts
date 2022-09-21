/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/**
 * TODO: 10. Asynchronous Programming (RxJS)
 * TODO: 13. Angular (NX) Architecture
*/
import { Component, OnInit } from '@angular/core';
import { Account } from 'libs/shared/services/src/lib/account';
import { AccountService } from 'libs/shared/services/src/lib/account.service';
import { Observable, of } from 'rxjs';
import {Router} from '@angular/router'
@Component({
  selector: 'sum-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.scss'],
})
export class AccountSummaryComponent implements OnInit {
  accounts$: Observable<Account[]> = of([]);
  constructor(private accountService: AccountService, private router: Router) {}
  accounts: Account[] = [];
  accountsFilter = '';

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe((accounts) => {
      this.accounts = accounts;
    });
  }

  retrieveAccount(id: string){
    console.log(id);
    console.log('here')
    this.accountService.currentaccount = this.accounts.filter(acc=>acc.id === id)[0]
    this.router.navigate(['/account',id]);
  }
  filterAccounts(accounts: Account[]) {
    return accounts.filter(acc => acc.currency === this.accountsFilter || this.accountsFilter === '');
  }
}
