import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { innernavswithoutroutingModel } from '../../models/innernavs-without-routing.model';

@Component({
  selector: 'app-inner-nav-without-routing',
  templateUrl: './inner-nav-without-routing.component.html',
  styleUrls: ['./inner-nav-without-routing.component.css'],
})
export class InnerNavWithoutRoutingComponent implements OnInit {
  @Input() innerNavs: innernavswithoutroutingModel[];
  @Input() customClass: string;
  @Output() clickedItem: EventEmitter<any> = new EventEmitter();
  selectedRow: any;
  constructor() {}

  ngOnChanges(change: any) {
    if (change.innerNavs) {
      this.innerNavs = change.innerNavs?.currentValue;
    }
  }
  ngOnInit(): void {}
  makeActive(item: any) {
    this.clickedItem.emit(item);
    this.innerNavs?.forEach((element) => {
      if (element.value === item.value) {
        element.active = true;
      } else {
        element.active = false;
      }
    });
  }

}
