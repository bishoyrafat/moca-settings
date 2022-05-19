import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans-component',
  templateUrl: './plans-component.component.html',
  styleUrls: ['./plans-component.component.css']
})
export class PlansComponentComponent implements OnInit {
  innerNavs=[
    {
      name: 'Hourly',
      url: 'hourly',
      active: true,
      visible:true
    },
    {
      name: 'Day',
      url: 'day',
      active: true,
      visible:true
    },
    {
      name: 'Tailored',
      url: 'tailored',
      active: true,
      visible:true
    },
    {
      name: 'Bundle',
      url: 'bundle',
      active: true,
      visible:true
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
