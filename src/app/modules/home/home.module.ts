import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ParallaxDirective } from '../../services/parallax.directive';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    HomeComponent,
    ParallaxDirective
  ],
  imports: [
    TooltipModule,
    CommonModule,
    HomeRoutingModule,
    ScrollToModule,      //add scrol
    CarouselModule,    //add carusel
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
