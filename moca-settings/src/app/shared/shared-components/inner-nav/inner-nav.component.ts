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

  @Output() clickedItem: EventEmitter<any> = new EventEmitter();
  constructor(private activeRoute: Router) {}

  ngOnChanges(change: any) {
    if (change.innerNavs) {
      this.innerNavs = change.innerNavs?.currentValue;
    }
    let currentRoute: any = this.activeRoute.url;
    this.makeCurrentActive(currentRoute);
  }
  ngOnInit(): void {}
  makeActive(item: any) {
    if (item.editMode) {
      this.activeRoute.navigate(['/' + item.url]);
      this.innerNavs?.forEach((element) => {
        if (element.url === item.url) {
          element.active = true;
        } else {
          element.active = false;
        }
      });
    }
  }
  makeCurrentActive(item: any) {
    let x = this.innerNavs.find((element) => {
      return item.includes(element.url);
    });
    if (x && !x.active) {
      this.innerNavs?.forEach((element) => {
        if (item.includes(element.url)) {
          element.active = true;
        } else {
          element.active = false;
        }
      });
    }
  }
  emitItem(item: innernavsModel) {
    this.clickedItem.emit(item);
  }
}
