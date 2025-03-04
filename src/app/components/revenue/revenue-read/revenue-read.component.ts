import { Component, OnInit } from '@angular/core';
import { Revenue } from '../revenue.model';
import { RevenueService } from '../revenue.service';

@Component({
  selector: 'app-revenue-read',
  templateUrl: './revenue-read.component.html',
  styleUrls: ['./revenue-read.component.css'],
})
export class RevenueReadComponent implements OnInit {
  constructor(private service: RevenueService) {}
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
  isLoading = true;
  ngOnInit(): void {
    this.service.getAll().subscribe(
      (revenues) => {
        this.isLoading = false;
        this.receitas = revenues;
      },
      (error) => {
        console.log(error);

        this.isLoading = false;
      }
    );
  }
}
