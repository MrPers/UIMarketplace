import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  // children:[
    // {
    //   path: 'login', component: LoginComponent,
    // },
    // {
    //   path: 'table', component: TableComponent,
    // },
    // {
    //   path: 'statisticsChart', component: StatisticsChartComponent,
    // }
  // ],
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
