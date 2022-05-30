import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topUp-navBar',
  templateUrl: './topUp-navBar.component.html',
  styleUrls: ['./topUp-navBar.component.css'],
})
export class TopUpNavBarComponent implements OnInit {
  innerNavs = [
    {
      name: 'Day',
      url: 'topup/day',
      active: true,
      visible: true,
      editMode: true,
      child:true
    },
    {
      name: 'Hourly',
      url: 'topup/hourly',
      active: false,
      visible: true,
      editMode: true,
      child:true
    },
    {
      name: 'Tailored',
      url: 'topup/tailored',
      active: false,
      visible: true,
      editMode: true,
      child:true
    },
    {
      name: 'Meeting Space',
      url: 'topup/meetingspace',
      active: false,
      visible: true,
      editMode: true,
      child:true
    },
  ];
  constructor() {}

  ngOnInit() {}
}
