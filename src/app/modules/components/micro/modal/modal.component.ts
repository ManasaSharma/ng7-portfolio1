
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
    public ModalTitle: string;
    @ViewChild('content',  { static: true }) content;
    @Output() result: EventEmitter<string> = new EventEmitter();

    constructor(private modalService: NgbModal) { }

    open(title) {
        this.ModalTitle = title;
        this.modalService.open(this.content, { ariaLabelledBy: 'modal-simple-title' })
            .result.then((result) => { console.log(this.content); console.log(result as string); this.result.emit(result) },
                (reason) => { console.log(reason as string); this.result.emit(reason) })
    }

    ngOnInit() {
    }

}