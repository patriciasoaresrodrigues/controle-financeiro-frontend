import { HeaderData } from './header.data.module';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  _headerData = new BehaviorSubject<HeaderData>({
    title: 'Inicio',
    icon: 'home',
    routerUrl: '',
  });

  get headerData(): HeaderData {
    return this._headerData.value;
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData);
  }
}
