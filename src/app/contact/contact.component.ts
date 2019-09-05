import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'restau-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  numberToDisplay = '';

  standard = {
    firstName: 'Benjamin',
    lastName: 'Glouton',
    role: 'Accueil',
    award: '',
    phoneNumber: '02-99-99-99-01'
  };

  sommelier = {
    firstName: 'David',
    lastName: 'Biro',
    role: 'Sommelier',
    award: 'Meilleur ouvrier de France 2000',
    phoneNumber: '02-99-99-99-98'
  }

  boucher = {
    firstName: 'Sébastien',
    lastName: 'Coirier',
    role: 'Boucher',
    award: 'Meilleur ouvrier de France 2010',
    phoneNumber: '02-99-99-99-78'
  }

  constructor() { }

  ngOnInit() {
  }

  displayBig(telephoneNumber) {
    console.log(telephoneNumber);
    this.numberToDisplay = telephoneNumber;
  }

}
