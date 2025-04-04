import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseCreateComponent } from './components/expense/expense-create/expense-create.component';
import { ExpenseDeleteComponent } from './components/expense/expense-delete/expense-delete.component';
import { ExpenseEditComponent } from './components/expense/expense-edit/expense-edit.component';
import { RevenueCreateComponent } from './components/revenue/revenue-create/revenue-create.component';
import { RevenueDeleteComponent } from './components/revenue/revenue-delete/revenue-delete.component';
import { RevenueEditComponent } from './components/revenue/revenue-edit/revenue-edit.component';
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
    path: 'receitas/criar',
    component: RevenueCreateComponent,
  },
  {
    path: 'receitas/atualizar/:id',
    component: RevenueEditComponent,
  },
  {
    path: 'receitas/deletar/:id',
    component: RevenueDeleteComponent,
  },
  {
    path: 'despesas',
    component: ExpenseComponent,
  },
  {
    path: 'despesas/criar',
    component: ExpenseCreateComponent,
  },
  {
    path: 'despesas/atualizar/:id',
    component: ExpenseEditComponent,
  },
  {
    path: 'despesas/deletar/:id',
    component: ExpenseDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
