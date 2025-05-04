import { Component, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Expense } from '../expense/expense.model';
import { ExpenseService } from '../expense/expense.service';

@Component({
  selector: 'app-dialog-pay-expense',
  templateUrl: './dialog-pay-expense.component.html',
  styleUrls: ['./dialog-pay-expense.component.css'],
})
export class DialogPayExpenseComponent {
  private expenseService = inject(ExpenseService);
  private router = inject(Router);
  readonly dialogRef = inject(MatDialogRef<DialogPayExpenseComponent>);
  readonly data = inject<Expense>(MAT_DIALOG_DATA);
  onNoClick(): void {
    this.dialogRef.close();
  }

  updatePayDate(): void {
    console.log(this.data);
    this.expenseService.updatePayDate(this.data).subscribe(() => {
      this.expenseService.showMessage('Atualizado com sucesso!');
      this.dialogRef.close();

      this.router.navigate(['/despesas']);
    });
  }
}
