import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ConfigService } from '../../../models/config/config.service';
=======
import { ConfigService } from '../../../services/config/config.service';

>>>>>>> 7fafa73f62381dbcb416322b6e1a8683e1742473
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
