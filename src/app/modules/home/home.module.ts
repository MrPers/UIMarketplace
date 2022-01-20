import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ParallaxDirective } from '../../services/parallax.directive';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ConstantsService } from '../../services/constants.service';
import { CurrencyService } from '../../services/currency.service';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    TooltipModule,
    CommonModule,
    HomeRoutingModule,
    ScrollToModule,      //add scrol
    CarouselModule,    //add carusel
  ],
  providers: [
    CurrencyService,
    ConstantsService
  ],
  bootstrap: [
    HomeComponent
  ]
})
export class HomeModule { }
