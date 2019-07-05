import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-cards',
  templateUrl: './multi-cards.component.html',
  styleUrls: ['./multi-cards.component.scss']
})
export class MultiCardsComponent implements OnInit {

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
      { cardName: 'About Me' },
      { cardName: 'Contact Me' }
    ];
  }
  displayCards() {
    this.displayCardsStack = !this.displayCardsStack;
  }

}
