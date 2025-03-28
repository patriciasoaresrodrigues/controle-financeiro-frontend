import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from '../expense.model';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-edit',
  templateUrl: './expense-edit.component.html',
  styleUrls: ['./expense-edit.component.css'],
})
export class ExpenseEditComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ExpenseService
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getById(id!).subscribe((expense) => {
      this.despesa = expense;
    });
  }
  despesa: Expense = {};

  updateExpense(): void {
    console.log(this.despesa);
    this.service.update(this.despesa).subscribe(() => {
      this.service.showMessage('Atualizado com sucesso!');
      this.router.navigate(['/despesas']);
    });
  }
  cancel(): void {
    this.router.navigate(['/despesas']);
  }
}
