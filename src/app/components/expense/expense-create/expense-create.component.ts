import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expense } from '../expense.model';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-create',
  templateUrl: './expense-create.component.html',
  styleUrls: ['./expense-create.component.css'],
})
export class ExpenseCreateComponent implements OnInit {
  constructor(private router: Router, private service: ExpenseService) {}

  ngOnInit(): void {}

  despesa: Expense = {};
  createExpense(): void {
    console.log(this.despesa);
    this.service.create(this.despesa).subscribe(() => {
      this.service.showMessage('Criado com Sucesso');
      this.router.navigate(['/despesas']);
    });
  }
  cancel(): void {
    this.router.navigate(['/despesas']);
  }
}
