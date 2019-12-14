import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../services/config/config.service';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
<<<<<<< HEAD
  public details: any;
    public myDetails =
        {
            desc: `Hi I am Manasa Budamagunta form Philladelphia,PA, currently working as a UI developer at KornFerry,
                  creating bug free front end sites. I have over 6+ years of extensive experience as a Creative Developer.`,
            MsDetails: 'MS Computer Science from Northwestern Polytechnic University 2014',
            MCADetails: 'MCA from Osmania University, Hyderabad, India- 2011'

        };
    getPersonalDetails() {
        console.log(this.myDetails);
        return this.myDetails;
=======
    public aboutMedetails: any;
    public errorMessage: string
    
    constructor( private configService: ConfigService) {  
    }
    
    ngOnInit() {
        this.configService.getAboutMeInfo().subscribe({
            next:data => {
                console.log(data);
                this.aboutMedetails = data;
            },
            error:err => this.errorMessage = err
        });
>>>>>>> 7fafa73f62381dbcb416322b6e1a8683e1742473
    }

}
