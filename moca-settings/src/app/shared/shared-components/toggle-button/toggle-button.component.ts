import { formatDate } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css'],
})
export class ToggleButtonComponent implements OnInit, OnChanges {
  @Input() hideLabel: boolean = false;
  @Input() labelText: string='';
  @Input() inputextraClass: string;
  @Input() value: boolean = false;
  @Input() disabled: boolean = false;
  @Output() checked: EventEmitter<boolean> = new EventEmitter();

  ngOnChanges(changes: any): void {
    this.disabled = changes.disabled?.currentValue;
  }
  ngOnInit(): void {}
  emitValue(e: any) {
    this.checked.emit(e.target.checked);
  }
  constructor(){}

}
