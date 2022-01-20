import { Injectable } from '@angular/core';
import { UserManagerSettings } from "oidc-client";
import * as Oidc from 'oidc-client';
import { CurrencyService } from "./currency.service";

const Authority = "https://localhost:5001";
const Silent_redirect_uri = "http://localhost:4200/refresh";
const Redirect_uri = 'http://localhost:4200/auth-callback';
const Post_logout_redirect_uri = 'http://localhost:4200/';
const Response_type = "code";
const AutomaticSilentRenew = true;
const LoadUserInfo = true;
const Scope = "openid profile Order";
const Client_id = 'client_angular_id';
export const URLpath = "https://localhost:5001/";

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  public productsResult: ProductsResult[]=[];
  public shopsResult: ShopsResult[]=[];
  public pricesResult: PricesResult[]=[];
  public productsPriceShop: ProductsPriceShop[]=[];

  constructor(private currencyService:CurrencyService) {

  }

  definitelyThereProducts: Promise<void>= new Promise(resolve =>
  {
    if(this.productsResult.length == 0){
      this.currencyService.getAllProductPriceShop()
      .subscribe((data: any) =>
      {
        this.productsResult=data["productsResult"];
        this.shopsResult=data["shopsResult"];
        this.pricesResult=data["pricesResult"];

        for (let index = 0; index < this.productsResult.length; index++) {
          // var productGroupID: number = 0;
          // var productName:string = "";
          // var photo: string = "";
          var shopsName:string = [];
          // for (let i = 0; i < this.productsResult.length; i++) {
          //   if(this.productsResult[i].id ==this.pricesResult[index].productId){
          //     productGroupID = this.productsResult[i].productGroupID;
          //     productName = this.productsResult[i].name;
          //     photo = "../../../../../assets/images/" + this.productsResult[i].photo;
          //     break;
          //   }
          // }
          for (let i = 0; i < this.shopsResult.length; i++) {
            if(this.shopsResult[i].id ==this.shopsName[index].shopId){
              shopName=this.shopsResult[i].name;
              break;
            }
          }
          this.productsPriceShop.push({
            priceId:0,
            productId : this.productsResult[index].id,
            shopsId : 0,
            prices : 0,
            numberProduct : 0,
            productGroupID : this.productsResult[index].productGroupID,
            productName : this.productsResult[index].name,
            shopsName : "",
            photo : "../../../../../assets/images/" + this.productsResult[index].photo,
          });
        }
        // for (let index = 0; index < this.pricesResult.length; index++) {
        //   var productGroupID: number = 0;
        //   var productName:string = "";
        //   var photo: string = "";
        //   var shopName:string = "";
        //   for (let i = 0; i < this.productsResult.length; i++) {
        //     if(this.productsResult[i].id ==this.pricesResult[index].productId){
        //       productGroupID = this.productsResult[i].productGroupID;
        //       productName = this.productsResult[i].name;
        //       photo = "../../../../../assets/images/" + this.productsResult[i].photo;
        //       break;
        //     }
        //   }
        //   for (let i = 0; i < this.shopsResult.length; i++) {
        //     if(this.shopsResult[i].id ==this.pricesResult[index].shopId){
        //       shopName=this.shopsResult[i].name;
        //       break;
        //     }
        //   }
        //   this.productsPriceShop.push({
        //     priceId:this.pricesResult[index].id,
        //     productId : this.pricesResult[index].productId,
        //     shopId : this.pricesResult[index].shopId,
        //     netPrice : this.pricesResult[index].netPrice,
        //     numberProduct : this.pricesResult[index].numberProduct,
        //     productGroupID : productGroupID,
        //     productName : productName,
        //     shopName : shopName,
        //     photo : photo,
        //   });
        // }
        resolve();
      });
    }
    else{
      resolve();
    }
  });

}

export function getClientSettings(): UserManagerSettings {
  return {
    userStore: new Oidc.WebStorageStateStore({ store: window.localStorage }), //чтоб хронилась сесия localStore
    authority: Authority,
    silent_redirect_uri : Silent_redirect_uri,
    redirect_uri: Redirect_uri,
    post_logout_redirect_uri: Post_logout_redirect_uri,
    response_type: Response_type,
    automaticSilentRenew: AutomaticSilentRenew, //указывающий, должна ли быть автоматическая попытка обновить токен доступа до истечения срока его действия
    scope: Scope,
    client_id: Client_id,
    loadUserInfo: LoadUserInfo, // загрузкой дополнительных идентификационных данных, чтобы заполнить пользователя profile
    // mergeClaims: MergeClaims,
    // filterProtocolClaims: FilterProtocolClaims, //следует ли удалять утверждения протокола OIDC из profile
    // checkSessionInterval: 50000, //Интервал в мс для проверки сеанса пользователя
    // silentRequestTimeout: 50000, //количество миллисекунд ожидания возврата беззвучного
  };

}

export class PricesResult{
  id:number = 0;
  netPrice:number = 0;
  numberProduct:number = 0;
  productId:number = 0;
  shopId:number = 0;
}
export class ProductsPriceShop{
  priceId:number = 0;
  productId:number = 0;
  shopsId:number[] = [];
  prices:number[] = [];
  numberProduct:number = 0;
  productGroupID:number = 0;
  productName:string = "";
  shopsName:string[] = [];
  photo:string = "";
}
export class ProductsResult{
  id:number = 0;
  name:string = "";
  photo:string = "";
  productGroupID:number = 0;
}
export class ShopsResult{
  id:number = 0;
  name:string = "";
}
