import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-multi-cards',
  templateUrl: './multi-cards.component.html',
  styleUrls: ['./multi-cards.component.scss']
})
export class MultiCardsComponent implements OnInit {

  public cards = [];
  public displayCardsStack = false;
  constructor(
    public modalService: ModalService
  ) {
    this.cards = this.getCards();
  }

  ngOnInit() {
  }
  getCards() {
    return [
      { cardName: 'Skills' , image: '../../../../../assets/images/skills.png'},
      { cardName: 'Experience' },
      { cardName: 'About Me' },
      { cardName: 'Contact Me' }
    ];
  }
  displayCards() {
    this.displayCardsStack = !this.displayCardsStack;
  }
  openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
}

}
