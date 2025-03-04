import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Revenue } from '../revenue.model';

@Component({
  selector: 'app-revenue-create',
  templateUrl: './revenue-create.component.html',
  styleUrls: ['./revenue-create.component.css'],
})
export class RevenueCreateComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  receita: Revenue = {};
  createRevenue(): void {
    console.log(this.receita);
  }
  cancel(): void {
    this.router.navigate(['/receitas']);
  }
}
