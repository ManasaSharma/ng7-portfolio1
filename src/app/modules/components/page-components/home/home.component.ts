import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public cards = [];
  public displayCardsStack = false;
  constructor() {
    this.cards = this.getCards();
  }

  ngOnInit() {
  }
  getCards() {
    return [
      { cardName: 'Skills' },
      { cardName: 'Experience' },
      { cardName: 'About Me' }
    ];
  }
  displayCards() {
    this.displayCardsStack = !this.displayCardsStack;
  }

}
