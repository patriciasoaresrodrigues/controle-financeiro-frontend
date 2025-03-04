import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Revenue } from '../revenue.model';
import { RevenueService } from '../revenue.service';

@Component({
  selector: 'app-revenue-create',
  templateUrl: './revenue-create.component.html',
  styleUrls: ['./revenue-create.component.css'],
})
export class RevenueCreateComponent implements OnInit {
  constructor(private router: Router, private service: RevenueService) {}

  ngOnInit(): void {}

  receita: Revenue = {};
  createRevenue(): void {
    console.log(this.receita);
    this.service.create(this.receita).subscribe(() => {
      this.service.showMessage('Criado com Sucesso');
      this.router.navigate(['/receitas']);
    });
  }
  cancel(): void {
    this.router.navigate(['/receitas']);
  }
}
