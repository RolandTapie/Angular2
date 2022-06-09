import { Component, VERSION } from '@angular/core';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  maj = new Date();
  prom = new Promise((resolve, rejected) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });
  name = 'Angular ' + VERSION.major;
  tps: boolean = false;

  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.tps = true;
    }, 4000);
  }

  appareils = [
    {
      nom: 'tele',
      status: 'allumé',
    },
    {
      nom: 'ordi',
      status: 'éteint',
    },
    {
      nom: 'four',
      status: 'allumé',
    },
  ];
}
