import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.services';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css'],
})
export class RevenueComponent {
  constructor(private router: Router, private headerService: HeaderService) {
    this.headerService.headerData = {
      title: 'Cadastro de Receitas',
      icon: 'local_atm',
      routerUrl: '/receitas',
    };
  }
  createRevenue(): void {
    this.router.navigate(['/receitas/criar']);
  }
}
