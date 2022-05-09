import { TableHeaderModel } from './../../models/types/TableHeader.model';
import { outputAst } from '@angular/compiler';
import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';

export type HeadersModel = {
  key: string;
  name: string;
  show: boolean;
  imgUrl?: string;
};
@Component({
  selector: 'app-internal-table',
  templateUrl: './internal-table.component.html',
  styleUrls: ['./internal-table.component.css'],
})
export class InternalTableComponent implements OnChanges {
  imgUrl = environment.assetsUrl;
  @Input() calltoAction:boolean = true
  @Input() hadEdit: boolean = true;
  @Input() hadDelete: boolean = true;
  @Input() tableBody: any[];
  @Input() tableHeader: HeadersModel[];
  @Output() itemToDelete: EventEmitter<any> = new EventEmitter();
  @Output() itemToEdit: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnChanges(changes: any): void {
    if (changes.tableBody) {
      this.tableBody = changes.tableBody?.currentValue;
    }
    if (changes.tableHeader) {
      this.tableHeader = changes.tableHeader?.currentValue;
    }
  }

  isDate(val: any) {

    if (
      val &&
      typeof val !== 'string' &&
      (val.toString().length === 4 || val.toString().length === 7)
    ) {
      return false;
    } else {
      return moment(val, moment.ISO_8601, true).isValid();
    }
  }

  del(item: any, index: number) {
    this.itemToDelete.emit({ item, index });
  }
  edit(item: any, index: number) {
    this.itemToEdit.emit({ item, index });
  }
}
