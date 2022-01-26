import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import {User } from '../../../../services/constants.service';
import { CurrencyService } from '../../../../services/currency.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: boolean = false;
  userRegistration: User = new User();
  submitted: boolean = false;
  visibility: boolean = true;

  constructor(private currencyService: CurrencyService,private authService: AuthService) { }

  ngOnInit(): void {
    // this.authService.startAuthentication().then((t:any) =>
    // {
      // debugger;
    //   this.url = t;
    // });
  }

  toggleOn(){
    this.visibility=true;
  }
  toggleOff(){
    this.visibility=false;
  }
  onSubmit() {
    this.currencyService.register(this.userRegistration)
      .subscribe(
        result => {
          this.visibility = true;
        },
        error => {
          if(error['status'] == 400) {
            this.error = true;
          }
        });
  }

}
