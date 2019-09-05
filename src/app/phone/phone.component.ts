import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'restau-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.less']
})
export class PhoneComponent implements OnInit {

  @Input() // com parent-enfant
  user: any;

  @Output() // com enfant-parent
  zoom = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  displayNumber() {
    this.zoom.emit(this.user.phoneNumber);
  }

}
