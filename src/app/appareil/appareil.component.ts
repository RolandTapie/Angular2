import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css'],
})
export class AppareilComponent implements OnInit {
  constructor() {}

  @Input()
  name: string = 'televiseur';
  status: string = 'éteint';
  btn: boolean = false;
  ngOnInit() {}

  getStatus() {
    return this.status;
  }

  getColor(): string {
    if (this.status == 'allumé') {
      return 'green';
    } else {
      return 'red';
    }
  }
  changeStatus() {
    if (this.status == 'éteint') {
      this.status = 'allumé';
    } else {
      this.status = 'éteint';
    }
  }
}
