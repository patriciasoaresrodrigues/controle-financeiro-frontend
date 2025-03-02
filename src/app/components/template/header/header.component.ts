import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private service: HeaderService) {}

  get title(): string {
    return this.service.headerData.title;
  }
  get icons(): string {
    return this.service.headerData.icon;
  }
  get router(): string {
    return this.service.headerData.routerUrl;
  }
}
