import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { QuickLunchService } from '../service/quick-lunch.service'; // via l'injection de dépendance, ng nous fournit l'objet. plus besoin de créer 1 new QuickLunchService() pour obtenir 1 instance 
import { Food } from '../model/food.interface';

@Component({
  selector: 'restau-my-dash',
  templateUrl: './my-dash.component.html',
  styleUrls: ['./my-dash.component.css']
})
export class MyDashComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Burgers', cols: 1, rows: 1 , id: 'brg' },
          { title: 'Galettes/crêpes', cols: 1, rows: 1, id: 'glt' },
          { title: 'Pizzas', cols: 1, rows: 1, id: 'piz' }
        ];
      }

      return [
        { title: 'Burgers', cols: 1, rows: 1, id: 'brg' },
        { title: 'Galettes/crêpes', cols: 1, rows: 2 , id: 'glt'},
        { title: 'Pizzas', cols: 1, rows: 1, id: 'piz' }
      ];
    })
  );

  // Tout ce qu'on veut afficher côté template est déclaré
  burgers: Food[];
  pizzas: Food[];
  galettes: Food[];


  constructor(private breakpointObserver: BreakpointObserver, private quickLunchService: QuickLunchService) {}

  ngOnInit() { // COnsommation de notre service : On demande au service de nous fournir les burgers, pizzas et galettes

    this.burgers = this.quickLunchService.getBurgers();
    this.pizzas = this.quickLunchService.getPizzas();
    this.galettes = this.quickLunchService.getGalettes();

  }
}
