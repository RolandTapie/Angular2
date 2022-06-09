export class AppareilService {
  public appareils = [
    {
      nom: 'tele',
      status: 'allumé',
    },
    {
      nom: 'ordi',
      status: 'allumé',
    },
    {
      nom: 'fourr',
      status: 'allumé',
    },
  ];

  AllumTout() {
    for (let app of this.appareils) {
      app.status = 'allumé';
    }
  }

  EteintTout() {
    for (let app of this.appareils) {
      app.status = 'éteint';
    }
  }

  AlUnique(index: number) {
    this.appareils[index].status = 'allumé';
  }

  EtUnique(index: number) {
    this.appareils[index].status = 'éteint';
  }
}
