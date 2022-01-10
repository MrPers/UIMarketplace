import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    // FormsModule,
    CommonModule,
    HomeRoutingModule,
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
