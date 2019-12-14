import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal.service';
import { ConfigService } from '../../../services/config/config.service';

@Component({
  selector: 'app-multi-cards',
  templateUrl: './multi-cards.component.html',
  styleUrls: ['./multi-cards.component.scss']
})
export class MultiCardsComponent implements OnInit {

  public cards: any;
  public displayCardsStack = false;
  public errorMessage: string;
  modalCloseResult: string;
  title = 'modal-demo';

  constructor(
    public modalService: ModalService,
    private configService: ConfigService
  ) {}

  ngOnInit() {
    this.configService.getCardsSetData().subscribe({
      next: data => {
        console.log('hi',data);
        this.cards = data
      },
      error: err => this.errorMessage = err
    });

  }
  onModalClose(reason: string) {
    console.log('reason', reason);
    this.modalCloseResult = reason;
  }
  displayCards() {
    this.displayCardsStack = !this.displayCardsStack;
  }
  
}
