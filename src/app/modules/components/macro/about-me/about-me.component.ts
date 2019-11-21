import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../services/config/config.service';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
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
    }

}
