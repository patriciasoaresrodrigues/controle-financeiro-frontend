import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.services';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css'],
})
export class ExpenseComponent {
  constructor(private router: Router, private headerService: HeaderService) {
    this.headerService.headerData = {
      title: 'Cadastro de Despesas',
      icon: 'local_atm',
      routerUrl: '/despesas',
    };
  }
  createExpense(): void {
    this.router.navigate(['/despesas/criar']);
  }
}
