import { TopUpService } from './../../topUp.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topUp-navBar',
  templateUrl: './topUp-navBar.component.html',
  styleUrls: ['./topUp-navBar.component.css'],
})
export class TopUpNavBarComponent  {
 @Input() innerNavs: any[] = [];
  constructor(private TopUpService: TopUpService) {}


}
