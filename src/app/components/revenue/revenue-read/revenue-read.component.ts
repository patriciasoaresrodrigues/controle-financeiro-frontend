import { Component, OnInit } from '@angular/core';
import { Revenue } from '../revenue.model';

@Component({
  selector: 'app-revenue-read',
  templateUrl: './revenue-read.component.html',
  styleUrls: ['./revenue-read.component.css'],
})
export class RevenueReadComponent implements OnInit {
  receitas: Revenue[] = [];
  displayedColumns: string[] = [
    'id',
    'name',
    'company',
    'amount',
    'dueDate',
    'payDate',
    'action',
  ];
  ngOnInit(): void {
    this.receitas = [
      {
        id: '123',
        name: 'Xuxu',
        company: 'Meli',
        amount: 1000,
        dueDate: new Date(),
      },
      {
        id: '234',
        name: 'Kikona',
        company: 'Meli',
        amount: 10000,
        dueDate: new Date(),
        payDate: new Date(),
      },
    ];
  }
}
