import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css'],
})
export class DeleteModalComponent implements OnInit {
  @Input() deleteTitle: string;
  @Input() deleteBody: string;

  @Output() deleteBtn: EventEmitter<string> = new EventEmitter();
  @Output() cancelBtn: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  buttonDelete(type: string) {
    this.deleteBtn.emit(type);
  }

  buttonCancel(type: string) {
    this.cancelBtn.emit(type);
  }

}
