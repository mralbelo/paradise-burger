import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
