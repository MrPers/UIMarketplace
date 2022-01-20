import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
// import { CSVRecord } from '../modules/admin/pages/add-data/add-data.component';
import { URLpath} from './constants.service';

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {

  constructor(private http:HttpClient, private authService: AuthService ) {}

  getAllProductPriceShop(){
    return this.http.get(URLpath + 'get-all-product-price-shop');
  };




  // getHistoryLette(user: User){
  //   return this.http.get(URLpath + 'get-history-lette/' + user.id, { headers: this.authService.getAuthorizationHeaderValue()});
  // };

  // updateUser(user: User){
  //   let formData = new FormData();
  //   formData.append("Id", user.id.toString());
  //   formData.append("Name", user.name);
  //   formData.append("Surname", user.surname);
  //   formData.append("Email", user.email);
  //   return this.http.post(URLpath + "update-user", formData, { headers: this.authService.getAuthorizationHeaderValue()});
  // };

}
