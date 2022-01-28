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
  userAuthentication: User = new User();
  submitted: boolean = false;
  visibility: boolean = true;

  constructor(private currencyService: CurrencyService,private authService: AuthService) { }

  ngOnInit(): void {
  }


  toggleOn(){
    this.visibility=true;
  }
  toggleOff(){
    this.visibility=false;
  }
  onAuthenticationSubmit() {
    this.currencyService.authentication(this.userAuthentication)
    .subscribe((data: any) =>
    {
      debugger;
      this.authService.getUser();
    });
  }
  onRegistrationSubmit() {
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
