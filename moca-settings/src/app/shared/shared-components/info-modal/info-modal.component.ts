import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css']
})
export class InfoModalComponent implements OnInit {

  @Input() modalTitle:string
  @Input() modalBody:string
  @Output() dismissModal:EventEmitter<string>=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  dismiss(){
    this.dismissModal.emit('close')
  }
}
