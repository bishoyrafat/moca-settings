import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topUp-navBar',
  templateUrl: './topUp-navBar.component.html',
  styleUrls: ['./topUp-navBar.component.css']
})
export class TopUpNavBarComponent implements OnInit {
  innerNavs=[
    {
      name: 'Day',
      url: 'day',
      active: true,
      visible:true
    },
    {
      name: 'Hourly',
      url: 'hourly',
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
      name: 'Meeting Space',
      url: 'meetingspace',
      active: true,
      visible:true
    },


  ]
  constructor() { }

  ngOnInit() {
  }

}
