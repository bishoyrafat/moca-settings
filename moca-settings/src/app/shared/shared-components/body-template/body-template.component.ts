import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-body-template',
  templateUrl: './body-template.component.html',
  styleUrls: ['./body-template.component.css'],
})
export class BodyTemplateComponent implements OnInit {
  @Input() hasEdit: boolean = false;
  @Input() hasAdd: boolean = true;
  @Input() hasReset: boolean = true;
  @Input() hideBtns: boolean = false;
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  editClicked() {
    this.edit.emit();
  }
  saveClicked() {
    this.save.emit();
  }
  deleteClicked() {
    this.delete.emit();
  }
}
