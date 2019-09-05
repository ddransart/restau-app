import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Schedule } from '../model/schedule.interface';
import { EveningEvent } from '../model/evening-event.interface';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private httpClient: HttpClient) { }

  search(term: string): Observable<EveningEvent[]> {
    const termLowercase = term.toLocaleLowerCase();
    return this.httpClient
      .get<Schedule>('assets/schedule.json') // considéré comme url de notre API
      .pipe(
        map(res => res['events'].filter(evt => evt.title.toLocaleLowerCase().indexOf(term) > -1 || evt.description.toLocaleLowerCase().indexOf(term) > -1)), // on filtre sur les evnts dont le titre ou la description comprend le terme saisi dans le champ
        tap(filteredEvents => console.log('filteredEvents', filteredEvents))
      );

  }
}
