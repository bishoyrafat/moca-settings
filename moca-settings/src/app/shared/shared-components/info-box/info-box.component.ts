import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css'],
})
export class InfoBoxComponent implements OnInit {
  @Input() showOutertitle:boolean = false;
  @Input() outertitle: string;
  @Input() showinnertitle:boolean = false;
  @Input() innertitle:string;
  constructor() {}

  ngOnInit(): void {}
}
