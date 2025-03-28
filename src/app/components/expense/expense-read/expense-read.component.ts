import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense.model';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-read',
  templateUrl: './expense-read.component.html',
  styleUrls: ['./expense-read.component.css'],
})
export class ExpenseReadComponent implements OnInit {
  constructor(private service: ExpenseService) {}
  despesas: Expense[] = [];
  displayedColumns: string[] = [
    'name',
    'company',
    'amount',
    'dueDate',
    'payDate',
    'action',
  ];
  isLoading = true;
  ngOnInit(): void {
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
}
