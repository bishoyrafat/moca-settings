import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-policies-navBar',
  templateUrl: './policies-navBar.component.html',
  styleUrls: ['./policies-navBar.component.css'],
})
export class PoliciesNavBarComponent implements OnInit {
  @Input() innerNavs: any[] = [];
  constructor() {}
  ngOnInit() {}
}
