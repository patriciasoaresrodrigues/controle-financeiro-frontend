import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Revenue } from '../revenue.model';

@Component({
  selector: 'app-revenue-edit',
  templateUrl: './revenue-edit.component.html',
  styleUrls: ['./revenue-edit.component.css'],
})
export class RevenueEditComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
  }
  receita: Revenue = {
    id: '123',
    name: 'Xuxu',
    company: 'Meli',
    amount: 1000,
    dueDate: new Date(),
  };
  updateRevenue(): void {
    console.log(this.receita);
  }
  cancel(): void {
    this.router.navigate(['/receitas']);
  }
}
