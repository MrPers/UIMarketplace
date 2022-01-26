import { Component, OnInit } from '@angular/core';
import { ConstantsService, Product } from '../../../../services/constants.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product | undefined;

  constructor(private constantsService: ConstantsService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    debugger;
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get('productId'));
    for (let index = 0; index < this.constantsService.pageMenuProducts.length; index++) {
      if(this.constantsService.pageMenuProducts[index].productId == productIdFromRoute){
        debugger;

      }
    }
  }
}
