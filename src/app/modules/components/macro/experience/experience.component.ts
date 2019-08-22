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
            imageURL: '../../../../../assets/images/kf.png',
            name: 'kf',
            companyURL: 'https://www.kornferry.com/'
        },
        {
            imageURL: '../../../../../assets/images/vm_logo.png',
            name: 'vm',
            companyURL: 'https://www.virginmobileusa.com/'
        },
        {
            imageURL: '../../../../../assets/images/vanguard.png',
            name: 'vanguard',
            companyURL: 'https://investor.vanguard.com/home/?WT.srch=1&cmpgn=PS:RE'
        },
        {
            imageURL: '../../../../../assets/images/jpmc.png',
            name: 'jpmc',
            companyURL: 'https://www.jpmorganchase.com/'
        },
        {
            imageURL: '../../../../../assets/images/ts.png',
            name: 'ts',
            companyURL: 'http://touchstone-enterprises.com/'
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
