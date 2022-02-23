import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthComponent } from './auth.component';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import { AddshopComponent } from './pages/addshop/addshop.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:'cart', component: CartComponent},
  {path:'login', component: LoginComponent},
  {path:'addproduct', component: AddproductComponent},
  {path:'addshop', component: AddshopComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
