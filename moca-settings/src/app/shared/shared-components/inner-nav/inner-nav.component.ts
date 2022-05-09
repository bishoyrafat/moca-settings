import { innernavsModel } from './../../models/innernavs.model';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Component,
  Input,
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-inner-nav',
  templateUrl: './inner-nav.component.html',
  styleUrls: ['./inner-nav.component.css'],
})
export class InnerNavComponent implements OnInit, OnChanges {
  @Input() innerNavs: innernavsModel[];
  @Input() customClass: string;
  @Input() active:string;

  @Output() clickedItem: EventEmitter<any> = new EventEmitter();
  constructor(private activeRoute: Router) {}

  ngOnChanges(change: any) {
    if (change.innerNavs) {
      this.innerNavs = change.innerNavs?.currentValue;
    }
    let currentRoute: any = this.activeRoute.url;
    this.makeActive(currentRoute);
  }
  ngOnInit(): void {}
  makeActive(item: any) {
    this.innerNavs?.forEach((element) => {
      if (element.url === item) {
        element.active = true;
      } else {
        element.active = false;
      }
    });
  }
  emitItem(item: innernavsModel) {
    this.clickedItem.emit(item);
  }
}
