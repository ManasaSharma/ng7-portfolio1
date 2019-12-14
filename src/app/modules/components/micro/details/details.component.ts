import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../services/config/config.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
    aboutMedetails: any;
    errorMessage: string;
    constructor(private configService: ConfigService) {}

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
