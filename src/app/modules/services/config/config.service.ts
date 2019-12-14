import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IAboutMe } from '../../models/aboutMe';
import { IExp } from '../../models/exp';
import { ISkills } from '../../models/skills';
import { ICards } from '../../models/cards';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private completeApiUrl = 'https://my-portfolio-cf913.firebaseio.com/.json';
  private aboutMeApiUrl = "https://my-portfolio-cf913.firebaseio.com/aboutMe/.json";
  private experiencesApiUrl = "https://my-portfolio-cf913.firebaseio.com/experience/.json";
  private skillsSetApiUrl = "https://my-portfolio-cf913.firebaseio.com/skills/.json";
  private cardsSetApiUrl = "https://my-portfolio-cf913.firebaseio.com/cards/.json";

  constructor(private httpClient: HttpClient) { }

  //fetching the data from firebase url
  public getAboutMeInfo(): Observable<IAboutMe> {
    return this.httpClient.get<IAboutMe>(this.aboutMeApiUrl);
  }
  public getExperienceDetails(): Observable<IExp[]> {
    return this.httpClient.get<IExp[]>(this.experiencesApiUrl);
  }
  public getSkillsSet(): Observable<ISkills> {
    return this.httpClient.get<ISkills>(this.skillsSetApiUrl);
  }
  public getCompleteDatal(): Observable<object> {
    return this.httpClient.get<object>(this.completeApiUrl);
  }
  public getCardsSetData(): Observable<ICards[]> {
    return this.httpClient.get<ICards[]>(this.cardsSetApiUrl);
  }
}
