import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  visibility: boolean = true;

  constructor() { }

  ngOnInit(): void {

  }

  toggleOn(){
    this.visibility=true;
  }
  toggleOff(){
    this.visibility=false;
  }

}
