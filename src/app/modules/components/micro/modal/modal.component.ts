import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() public title: string;
  @Input() public id: string;

  private element: any;

  constructor(
    public modalService: ModalService,
    private ele: ElementRef
  ) { 
    this.element = ele.nativeElement;
  }

  ngOnInit() {
    let modal = this;

        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);

        // close modal on background click
        this.element.addEventListener('click', function (e: any) {
            if (e.target.className === 'modal') {
                modal.close();
            }
        });

        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
  }
    ngOnDestroy(): void {
      this.modalService.remove(this.id);
      this.element.remove();
  }

  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('modal-open');
  }

// close modal
  close(): void {
      this.element.style.display = 'none';
      document.body.classList.remove('modal-open');
  }
}
