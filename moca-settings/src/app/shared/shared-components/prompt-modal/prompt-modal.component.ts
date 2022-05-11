import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-prompt-modal',
  templateUrl: './prompt-modal.component.html',
  styleUrls: ['./prompt-modal.component.css'],
})
export class PromptModalComponent implements OnInit {
  @Input() modalTitle: string;
  @Input() customClass: string;
  @Input() imgSrc: string;
  @Input() submitText: string = 'Add';

  @Output() dismissModal: EventEmitter<string> = new EventEmitter();
  @Output() modalSubmit: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  dismiss() {
    this.dismissModal.emit('close');
  }
  submitModal(){
    this.modalSubmit.emit('submit')
  }
}
