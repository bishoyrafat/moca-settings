import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() customClass:string

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }
  open() {
    const modalRef = this.modalService.open(ModalComponent);
  }

}
