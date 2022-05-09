import { carouselModel } from './../../models/carousel.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() slides: carouselModel[] = [];
  @Input() slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    draggable: false,
    infinite: false,
    initialSlide:0
  };

  @Input() customClass: string;
  @Output() clickedItem: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnChanges(change: any) {
    if (change.slides&&change.slides.currentValue) {
      this.slides = change.slides?.currentValue;
    }
    this.makeActive(this.slides[0]);
  }

  ngOnInit(): void {}

  makeActive(item: any) {
    this.clickedItem.emit(item);
    this.slides?.forEach((element) => {
      if (element.value === item.value) {
        element.active = true;
      } else {
        element.active = false;
      }
    });
  }
  identify(index: any, item: any) {
    return item.name;
  }
}
