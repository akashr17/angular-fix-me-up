import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Account } from 'libs/shared/services/src/lib/account';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AccountService } from 'libs/shared/services/src/lib/account.service';

@Component({
  selector: 'angular-anim-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountDetailsComponent implements OnInit{
  constructor(private accountService: AccountService, private route: Router){};
  account!: Account;
  ngOnInit(): void {
      console.log("testing here")
      this.accountService.retreiveAccount().subscribe((curr)=>
      {
        if (curr) {
          this.account = curr;
          console.log(this.account)
        }
        else {
          this.accountService.getAccounts().subscribe((accounts) => {
            this.account = accounts.filter(acc=>acc.id === this.route.url.split("/", 3)[2])[0]
          });
        }
      }
    );
      console.log(this.account)
  }
}
