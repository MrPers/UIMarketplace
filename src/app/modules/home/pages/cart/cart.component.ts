import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConstantsService } from '../../../../services/constants.service';
import { CurrencyService } from '../../../../services/currency.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private constantsService: ConstantsService, private currencyService:CurrencyService, private route: ActivatedRoute){}
  products = [];

  ngOnInit() {
    let userID = "acf93f63-6026-45a0-d7b3-08d9f6df7563";
    // let userID = "140708be-a80b-4ac6-d7b2-08d9f6df7563";

    this.currencyService.getUserChoiceByUserId(userID)
      .subscribe((data: any) =>
      {
        this.products = data['userChoicesResult'];
        debugger;
      });

  }

}
