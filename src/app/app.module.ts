import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RedDirective } from './directives/red.directive';
import { HomeComponent } from './views/home/home.component';
import { RevenueComponent } from './views/revenue/revenue.component';
import { ExpenseComponent } from './views/expense/expense.component';
import { RevenueReadComponent } from './components/revenue/revenue-read/revenue-read.component';
import { RevenueCreateComponent } from './components/revenue/revenue-create/revenue-create.component';
import { RevenueEditComponent } from './components/revenue/revenue-edit/revenue-edit.component';
import { RevenueDeleteComponent } from './components/revenue/revenue-delete/revenue-delete.component';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { NgxCurrencyDirective } from 'ngx-currency';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    RedDirective,
    HomeComponent,
    RevenueComponent,
    ExpenseComponent,
    RevenueReadComponent,
    RevenueCreateComponent,
    RevenueEditComponent,
    RevenueDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxCurrencyDirective,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    HttpClientModule,
  ],
  providers: [
    MatDatepickerModule,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
