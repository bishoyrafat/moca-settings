import {
  Component,
  Input,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent implements OnInit {
  constructor() {}

  @Input() labelText: string;
  @Input() inputType: string;
  @Input() inputMin: string;
  @Input() inputMax: string;
  @Input() inputextraClass: string;
  @Input() errMsg: string = '';
  @Output() search: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}
  searchClicked(e: any) {
    this.search.emit(e.value);
  }
}
