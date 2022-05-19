import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-material',
  templateUrl: './dropdown-material.component.html',
  styleUrls: ['./dropdown-material.component.scss'],
})
export class DropdownMaterialComponent implements OnInit {
  @Input() panelOpenState = false;
  @Input() expansionHeader: string;
  @Input() hasEditable = false;
  @Input() customClass = '';
  @Input() dotImgSrc = '';
  @Input() editImgSrc = '';
  @Input() deleteImgSrc = '';
  @Input() hasDot: boolean = false;
  @Input() expanded: boolean = true;
  @Output() editBtn = new EventEmitter();
  @Output() deleteBtn = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  edit(e: any) {
    this.editBtn.emit(e);
  }
  delete(e: any) {
    this.deleteBtn.emit(e);
  }
}
