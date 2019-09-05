import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CarteComponent } from './carte/carte.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ContactComponent } from './contact/contact.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // http://localhost:4200
  { path: 'carte', component: CarteComponent }, // http://localhost:4200/carte
  { path: 'reserve', component: ReserveComponent }, // http://localhost:4200/reserve
  { path: 'schedule', component: ScheduleComponent }, // http://localhost:4200/schedule
  { path: 'contact', component: ContactComponent }, // http://localhost:4200/contact

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
