import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogPayExpenseComponent } from '../../dialog-pay-expense/dialog-pay-expense.component';
import { Expense } from '../expense.model';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-read',
  templateUrl: './expense-read.component.html',
  styleUrls: ['./expense-read.component.css'],
})
export class ExpenseReadComponent implements OnInit {
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private service: ExpenseService
  ) {}
  despesas: Expense[] = [];
  displayedColumns: string[] = [
    'name',
    'company',
    'amount',
    'dueDate',
    'payDate',
    'status',
    'action',
  ];
  isLoading = true;
  ngOnInit(): void {
    this.getAll();
  }
  despesa: Expense = {};

  openDialog(despesa: any): void {
    const dialogRef = this.dialog.open(DialogPayExpenseComponent, {
      data: { ...despesa },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getAll();
    });
  }

  getAll() {
    this.despesas = [];
    this.service.getAll().subscribe(
      (expenses) => {
        this.isLoading = false;
        this.despesas = expenses;
      },
      (error) => {
        console.log(error);

        this.isLoading = false;
      }
    );
  }

  getStatus(expense: Expense): string {
    const today = new Date();
    const dueDate = expense.dueDate ? new Date(expense.dueDate) : null;
    const payDate = expense.payDate ? new Date(expense.payDate) : null;

    if (!payDate && dueDate && dueDate < today) {
      return 'Vencido';
    } else if (payDate) {
      return 'Pago';
    } else {
      return 'À Vencer';
    }
  }
}
