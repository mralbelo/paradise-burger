import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IEvents } from '../shared/entities/events.entity';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as _ from 'lodash';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

   images = [
    '../../assets/menu/19c02449401137.58b40fbcaa02e.jpg',
    '../../assets/menu/angus-generous-fries-pano-v7-copy.jpg',
    '../../assets/menu/e2e06c637229421596197fc833ab8924.png',
   ];

   events: IEvents[] = [];

   constructor(private http: HttpClient) { }

   ngOnInit() {
     this.loadEvents();
   }
   public loadEvents() {
      this.http.get<IEvents[]>('./assets/data/events.json').subscribe(result => {

        this.events = _.orderBy(result, 'date', 'desc');
      });
   }

}
