import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
public info = [];
    public myDetails = 
        {
            name: 'Manasa',
            role: 'Front-End Developer'
        };
    
    getMyDetails() {
        console.log(this.myDetails);
        return this.myDetails;
    }
    constructor() {
        this.info = this.getMyDetails();
    }

  ngOnInit() {
  }

}
