import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AboutMe } from '../../../about-me/about-me';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  apiUrl = 'https://my-portfolio-cf913.firebaseio.com/.json';

  constructor(private httpClient: HttpClient) { }

  public getAboutMeInfo(url?: string) {
    return this.httpClient.get(this.apiUrl);
  }
}
