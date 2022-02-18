import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { DBkeys, User} from './constants.service';
// import { CSVRecord } from '../modules/admin/pages/add-data/add-data.component';

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {

  constructor(private http:HttpClient, private authService: AuthService ) {}

  getProductById(id: string){
    let r = this.authService.getAuthorizationHeaderValue();
    let r2 = DBkeys.URLpath + '/get-product-by-id/' + id;
    debugger;
    return this.http.get(r2, { headers: r});
  };

  getProductByShopId(id: string){
    return this.http.get(DBkeys.URLpath + '/get-product-by-shop-id/' + id);
  };

  getProductAll(){
    return this.http.get(DBkeys.URLpath + '/get-product-all');
  };

  authUser(user: User){
    return this.http.post(DBkeys.URLpath + "/Account/login", user);
  };

  logout(){
    return this.http.get(DBkeys.URLpath + "/Account/logout");
  };

  addUser(user: User){
    return this.http.post(DBkeys.URLpath + "/Account/register", user);
  };

  // userAuthentication(user: User){
  //   return this.http.post(DBkeys.URLpath + "Account/authentication", user);
  // };

}

