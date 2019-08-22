import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  public cards: any;
  public contactDetails;
  constructor() { 
    this.contactDetails = this.getContactInfo();
  }

  ngOnInit() {
  }
  getContactInfo() {
    return {
      name: 'Manasa B',
      phoneNumber: 8653569652,
      title: 'Front-End Developer',
      resume: 'Resume',
      email: 'bmanasa.sharma@gmail.com'

    };
  }

}
