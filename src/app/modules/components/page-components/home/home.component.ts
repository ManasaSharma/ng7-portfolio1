import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../services/config/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  welcomeDetails: any;
  constructor(private apiConfigService: ConfigService) { }

  ngOnInit() {
    this.apiConfigService.getAboutMeInfo().subscribe((res) => {
      console.log('hello')
      console.log(res);
      return this.welcomeDetails = res;
    });
    // this.apiConfigService.getLocalApiData().subscribe((res) => {
    //   console.log('hello')
    //   console.log(res);
    //   return res;
    // });
  }
}
