import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IMenu } from '../shared/entities/menu.entity';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as _ from 'lodash';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: IMenu[] = [];
  special: IMenu = null;
  currentWeekday = -1;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.currentWeekday = new Date().getDay();
    this.loadMenu();
  }
  public loadMenu() {
     this.http.get<IMenu[]>('./assets/data/menu.json').subscribe(result => {

       this.menu = _.orderBy(result, 'order', 'desc');
       const weekdaySpecial = this.menu.filter(m => m.weekdaySpecial === new Date().getDay());
       if (weekdaySpecial && weekdaySpecial.length > 0) {
         this.special = weekdaySpecial[0];
       }
     });
  }

}

