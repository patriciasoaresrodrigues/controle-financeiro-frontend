import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseComponent } from './views/expense/expense.component';
import { HomeComponent } from './views/home/home.component';
import { RevenueComponent } from './views/revenue/revenue.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'receitas',
    component: RevenueComponent,
  },
  {
    path: 'despesas',
    component: ExpenseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
