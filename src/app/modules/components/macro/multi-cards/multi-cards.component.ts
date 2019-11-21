import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal.service';
import { ConfigService } from '../../../services/config/config.service';

@Component({
  selector: 'app-multi-cards',
  templateUrl: './multi-cards.component.html',
  styleUrls: ['./multi-cards.component.scss']
})
export class MultiCardsComponent implements OnInit {

  public cards = [];
  public displayCardsStack = false;
  modalCloseResult: string;
  title = 'modal-demo';
  constructor(
    public modalService: ModalService,
    private configService: ConfigService
  ) {}

  ngOnInit() {
    this.configService.getCardsSetData().subscribe(
      (data: any) => this.cards = data)
  }
  // getCards() {
  //   return [
  //     { cardName: 'Skills'},
  //     { cardName: 'Companies' },
  //     { cardName: 'About Me' },
  //     { cardName: 'Contact Me' }
  //   ];
  // }
  onModalClose(reason: string) {
    this.modalCloseResult = reason;
  }
  displayCards() {
    this.displayCardsStack = !this.displayCardsStack;
  }
//   openModal(id: string) {
//     this.modalService.open(id);
// }

// closeModal(id: string) {
//     this.modalService.close(id);
// }

}
