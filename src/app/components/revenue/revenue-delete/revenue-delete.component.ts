import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Revenue } from '../revenue.model';
import { RevenueService } from '../revenue.service';

@Component({
  selector: 'app-revenue-delete',
  templateUrl: './revenue-delete.component.html',
  styleUrls: ['./revenue-delete.component.css'],
})
export class RevenueDeleteComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: RevenueService
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getById(id!).subscribe((revenue) => {
      this.receita = revenue;
    });
  }
  receita: Revenue = {};
  deleteRevenue(): void {
    console.log(this.receita);
    this.service.delete(this.receita.id!).subscribe(() => {
      this.service.showMessage('Registro deletado com sucesso!');
      this.router.navigate(['/receitas']);
    });
  }
  cancel(): void {
    this.router.navigate(['/receitas']);
  }
}
