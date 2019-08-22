import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  public details: any;
    public myDetails =
        {
            desc: `Hi I am Manasa Budamagunta form Philladelphia,PA, currently working as a UI/UX developer at KornFerry,
                  creating bug free front end sites. I have over 6+ years of extensive experience as a Creative Developer.`,
            MsDetails: 'MS Computer Science from Northwestern Polytechnic University 2014',
            MCADetails: 'MCA from Osmania University, Hyderabad, India- 2011'

        };
    getPersonalDetails() {
        console.log(this.myDetails);
        return this.myDetails;
    }
  constructor() { 
    this.myDetails = this.getPersonalDetails();
  }

  ngOnInit() {
  }

}
