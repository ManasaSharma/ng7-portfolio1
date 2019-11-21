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
      return this.welcomeDetails = res;
    });
  }
}
