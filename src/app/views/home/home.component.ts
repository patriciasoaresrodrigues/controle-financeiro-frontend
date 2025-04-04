import { Component } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private headerService: HeaderService) {
    this.headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routerUrl: '/',
    };
  }
}
