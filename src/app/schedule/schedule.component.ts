import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map, tap, switchMap } from 'rxjs/operators'; // operateur très pratik ki permet à l'observable attendre ke l'user ait cessé de taper pdt kelkes millisec et ne pousser les données kà partir de ce moment là

import { ScheduleService } from '../service/schedule.service';
import { EveningEvent } from '../model/evening-event.interface';

@Component({
  selector: 'restau-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.less']
})
export class ScheduleComponent implements OnInit {

  searchTerm = new FormControl();
  searchTerm$: Observable<string> = this.searchTerm.valueChanges;
  result: EveningEvent[] = [];

  constructor(private ScheduleService: ScheduleService) { }

  ngOnInit() {

    // On s'abonne à notre observable car il est paresseux et ne fera rien si on ne le fait pas
    this.searchTerm$
      .pipe(
        //map(x => x.toUpperCase()), // pour transformer en majuscules la valeur saisie dans le champ
        //tap(x => console.log('après map uppercase', x)), // permet d'expionner ce qui se passe dans son flux et on peut regler certaines erreurs dont on ne comprenait pas trop la provenance
        //map(upperCased => this.reverse(upperCased)), // pour transformer en majuscules la valeur saisie dans le champ
        //tap(x => console.log('après reverse', x)),

        debounceTime(1000), // en ms (donc 1s. 500ms c'est mieux) c'est au bout de 3 sec que ce qu'on a saisit est envoyé. pour permettre à l'user de finir sa saisie avant de lancer la requete. dc éviter les requetes inutiles.
        switchMap(word => this.ScheduleService.search(word)),
        tap(x => console.log('espionnage', x))
        )
      .subscribe(data => this.result = data);
  }

  reverse(word) {
    return word.split('').reverse().join('');
  }

}
