import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'restau-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.less']
})
export class ReserveComponent implements OnInit {

  reservationForm: FormGroup; // cet objet représente tout le formulaire qui sera créé côté template.
  date = new Date(); // Date courante

  timeOptions = ["12:00", "12:30", "13:00", "13:30", "19:00", "19:30", "20:00", "20:30"]; // Heures de réservation
  peopleOptions = [1, 2, 3, 4, 5, 6, 7, 8]; // nbre de personnes prévues

  isScheduleOk = false; // flag controlant l'affichage successif des formulaires (affichage de chaque formulaire selon l'état du flag)


  client = { firstName: '', lastName: '', email: '', phone: '' };
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.reservationForm = this.fb.group({
      date: new Date(),
      time: "",
      people: 1
    });

  }

  saveReservation() {
    if(this.reservationForm.valid) { // si le formulaire est valide
      console.log(this.reservationForm);
      this.isScheduleOk = true;
    }
  }

  finalizeReservation(form) {
    console.log('valid');
    console.log(form.value);
    console.log(form);
  }
}
