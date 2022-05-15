import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policies-navBar',
  templateUrl: './policies-navBar.component.html',
  styleUrls: ['./policies-navBar.component.css']
})
export class PoliciesNavBarComponent implements OnInit {
  innerNavs=[
    {
      name: 'Cancellation Policy',
      url: 'cancellationpolicy',
      active: true,
      visible:true
    },
    {
      name: 'Privacy Policy',
      url: 'privacypolicy',
      active: true,
      visible:true
    },
    {
      name: 'User Terms Of Use',
      url: 'userterms',
      active: true,
      visible:true
    },
    {
      name: 'Enterprise Terms of Use',
      url: 'enterpriseterms',
      active: true,
      visible:true
    },
    {
      name: 'Venue Account Agreement',
      url: 'venueaccountagreement',
      active: true,
      visible:true
    },
    {
      name: 'Cookie Policy',
      url: 'cookiepolicy',
      active: true,
      visible:true
    },

  ]
  constructor() { }

  ngOnInit() {
  }

}
