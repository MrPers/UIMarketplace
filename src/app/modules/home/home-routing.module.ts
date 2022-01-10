import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent,
    // children:[
    //   {
    //     path: 'chart', component: ChartComponent,
    //   },
    //   {
    //     path: 'table', component: TableComponent,
    //   },
    //   {
    //     path: 'statisticsChart', component: StatisticsChartComponent,
    //   }
    // ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
