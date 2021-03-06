import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'angular-highcharts';

import { MultiCardsComponent } from './modules/components/macro/multi-cards/multi-cards.component';
import { MyInfoComponent } from './modules/components/macro/my-info/my-info.component';
import { AvatarComponent } from './modules/components/micro/avatar/avatar.component';
import { CardComponent } from './modules/components/micro/card/card.component';
import { DetailsComponent } from './modules/components/micro/details/details.component';
import { ModalComponent } from './modules/components/micro/modal/modal.component';
import { TextComponent } from './modules/components/micro/text/text.component';
import { HomeComponent } from './modules/components/page-components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SkillsComponent } from './modules/components/macro/skills/skills.component';
import { ExperienceComponent } from './modules/components/macro/experience/experience.component';
import { AboutMeComponent } from './modules/components/macro/about-me/about-me.component';
import { ContactMeComponent } from './modules/components/macro/contact-me/contact-me.component';
@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    HomeComponent,
    CardComponent,
    DetailsComponent,
    AvatarComponent,
    MultiCardsComponent,
    MyInfoComponent,
    ModalComponent,
    SkillsComponent,
    ExperienceComponent,
    AboutMeComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    DialogModule,
    NgbModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
