import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-action-button',
  templateUrl: './floating-action-button.component.html',
  styleUrls: ['./floating-action-button.component.css']
})
export class FloatingActionButtonComponent implements OnInit {

  fab = false;

  constructor() { }

  ngOnInit() {
  }

  disableScroll() {
    const div = document.getElementById('body');
    if (div.classList.contains('no-scroll')) {
      div.classList.remove ('no-scroll');
    } else {
      div.classList.add ('no-scroll');
    }
  }

  onPlusminus() {
    const div = document.getElementById('plusMinus');
    if (div.classList.contains('active')) {
      div.classList.remove ('active');
      this.fab = false;
      this.disableScroll();
    } else {
      div.classList.add ('active');
      this.fab = true;
      this.disableScroll();
    }
  }

}
