import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans-component',
  templateUrl: './plans-component.component.html',
  styleUrls: ['./plans-component.component.css']
})
export class PlansComponentComponent implements OnInit {
  innerNavs=[
    {
      name: 'hourly',
      url: 'hourly',
      active: true,
      visible:true
    },
    {
      name: 'day',
      url: 'day',
      active: true,
      visible:true
    },
    {
      name: 'tailored',
      url: 'tailored',
      active: true,
      visible:true
    },
    {
      name: 'bundle',
      url: 'bundle',
      active: true,
      visible:true
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
