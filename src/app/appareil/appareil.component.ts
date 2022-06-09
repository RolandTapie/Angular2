import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css'],
})
export class AppareilComponent implements OnInit {
  constructor() {}

  name: string = 'televiseur';
  status: string = 'éteint';
  btn: boolean = false;
  ngOnInit() {}

  getStatus() {
    return this.status;
  }

  changeStatus() {
    if (this.status == 'éteint') {
      this.status = 'allumé';
    } else {
      this.status = 'éteint';
    }
  }
}
