import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule,// надо для Router
    AppRoutingModule,// надо для Router
    HomeModule,// новый роут для Router
    //CarouselModule,    //add carusel
    ScrollToModule.forRoot(), //add scrol, ндо чтобы была в App

    // FormsModule,
    // HttpClientModule,
    // ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
