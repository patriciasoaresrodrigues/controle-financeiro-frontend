import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Revenue } from './revenue.model';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RevenueService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'applications/json',
      Accept: 'application/json',
    }),
  };
  baseUrl = 'http://localhost:8080/api/revenues';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }
  create(revenue: any): Observable<Revenue> {
    return this.http.post<any>(this.baseUrl, revenue, this.httpOptions).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro! Tente novamente.', true);
    return EMPTY;
  }
  getAll(): Observable<Revenue[]> {
    return this.http.get<Revenue[]>(this.baseUrl);
  }

  getById(id: string): Observable<Revenue> {
    return this.http.get<Revenue>(`${this.baseUrl}/${id}`);
  }

  update(revenue: any): Observable<Revenue> {
    return this.http.put<any>(`${this.baseUrl}/${revenue.id}`, revenue).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: string): Observable<Revenue> {
    return this.http.delete<Revenue>(`${this.baseUrl}/${id}`);
  }
}
