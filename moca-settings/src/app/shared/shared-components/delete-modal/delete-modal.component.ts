import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css'],
})
export class DeleteModalComponent implements OnInit {
  @Input() deleteTitle: string;
  @Input() deleteBody: string;

  @Output() buttonClick: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  buttonClicked(type: string) {
    this.buttonClick.emit(type);
  }
}
