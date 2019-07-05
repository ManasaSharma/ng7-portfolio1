import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponent } from './modules/components/micro/text/text.component';
import { HomeComponent } from './modules/components/page-components/home/home.component';
import { CardComponent } from './modules/components/micro/card/card.component';
import { DetailsComponent } from './modules/components/micro/details/details.component';
import { AvatarComponent } from './modules/components/micro/avatar/avatar.component';
import { MultiCardsComponent } from './modules/components/macro/multi-cards/multi-cards.component';
import { MyInfoComponent } from './modules/components/macro/my-info/my-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    HomeComponent,
    CardComponent,
    DetailsComponent,
    AvatarComponent,
    MultiCardsComponent,
    MyInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
