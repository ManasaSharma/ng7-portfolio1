import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
    public experiences = [];
    public myExperiences = [
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
    getExperienceDetails() {
        console.log(this.myExperiences);
        return this.myExperiences;
    }
    constructor() {
        this.experiences = this.getExperienceDetails();
    }

    ngOnInit() {
    }

}
