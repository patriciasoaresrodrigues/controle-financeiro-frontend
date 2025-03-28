import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Expense } from './expense.model';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };
  baseUrl = 'http://localhost:8080/api/expenses';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }
  create(expense: any): Observable<Expense> {
    return this.http.post<any>(this.baseUrl, expense, this.httpOptions).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro! Tente novamente.', true);
    return EMPTY;
  }
  getAll(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.baseUrl);
  }

  getById(id: string): Observable<Expense> {
    return this.http.get<Expense>(`${this.baseUrl}/${id}`);
  }

  update(expense: any): Observable<Expense> {
    return this.http.put<any>(`${this.baseUrl}/${expense.id}`, expense).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: string): Observable<Expense> {
    return this.http.delete<Expense>(`${this.baseUrl}/${id}`);
  }
}
