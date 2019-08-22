import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  public details = [];
    public myDetails = [
        {
            imageURL: '../../../../../assets/images/kf.jpeg',
            year: '(May 2018 - Present)'
        },
        {
            imageURL: '../../../../../assets/images/vm_logo.png',
            year: '(April 2017-April 2018)'
        },
        {
            imageURL: '../../../../../assets/images/vanguard.png',
            year: '(March 2016 - March 2017)'
        },
        {
            imageURL: '../../../../../assets/images/jpmc.png',
            year: '(April 2014 - Dec 2015)'
        },
        {
            imageURL: '../../../../../assets/images/ts.png',
            year: '(Jan 2012 - March 2013)'
        }

    ];
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
