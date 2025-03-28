import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from '../expense.model';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-delete',
  templateUrl: './expense-delete.component.html',
  styleUrls: ['./expense-delete.component.css'],
})
export class ExpenseDeleteComponent implements OnInit {
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
  deleteExpense(): void {
    console.log(this.despesa);
    this.service.delete(this.despesa.id!).subscribe(() => {
      this.service.showMessage('Registro deletado com sucesso!');
      this.router.navigate(['/despesas']);
    });
  }
  cancel(): void {
    this.router.navigate(['/despesas']);
  }
}
