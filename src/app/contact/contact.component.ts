import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contact_mail: string;
  contact_number: number;
  contact_address: address;
  showContact: boolean;

  constructor() {
    this.contact_mail = "abc@xyz.com",
      this.contact_number = 9800800078,
      this.contact_address = {
        street: "MG Road",
        city: "Chennai",
        state: "Tamil Nadu",
        country: "India",
        pin: 812210
      }
    this.showContact = false;
  }

  toggleAddress() {
    if (this.showContact == true) {
      this.showContact = false;
    } else {
      this.showContact = true;
    }

  }
}

interface address {
  street: string;
  city: string;
  state: string;
  country: string;
  pin: number;
}
