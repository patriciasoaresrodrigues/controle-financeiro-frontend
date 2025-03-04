import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Revenue } from '../revenue.model';
import { RevenueService } from '../revenue.service';

@Component({
  selector: 'app-revenue-edit',
  templateUrl: './revenue-edit.component.html',
  styleUrls: ['./revenue-edit.component.css'],
})
export class RevenueEditComponent implements OnInit {
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

  updateRevenue(): void {
    console.log(this.receita);
    this.service.update(this.receita).subscribe(() => {
      this.service.showMessage('Atualizado com sucesso!');
      this.router.navigate(['/receitas']);
    });
  }
  cancel(): void {
    this.router.navigate(['/receitas']);
  }
}
