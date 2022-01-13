import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    TooltipModule,
    CommonModule,
    HomeRoutingModule,

    ScrollToModule      //add scrol
  ],
  providers: [
  //   CurrencyService,
  //   ConstantsService
  ],
  bootstrap: [
    HomeComponent
  ]
})
export class HomeModule { }
