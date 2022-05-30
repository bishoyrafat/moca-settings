import { DateRangePickerComponent } from './../../shared/shared-components/date-range-picker/date-range-picker.component';
import { PoliciesService } from './../policies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policies-navBar',
  templateUrl: './policies-navBar.component.html',
  styleUrls: ['./policies-navBar.component.css'],
})
export class PoliciesNavBarComponent implements OnInit {
  innerNavs = [
    {
      name: 'Cancellation Policy',
      url: 'policies/cancellationpolicy',
      active: true,
      visible: true,
      editMode: true,
      child:true

    },
    {
      name: 'Privacy Policy',
      url: 'policies/privacypolicy',
      active: false,
      visible: true,
      editMode: true,
            child:true

    },
    {
      name: 'User Terms Of Use',
      url: 'policies/userterms',
      active: false,
      visible: true,
      editMode: true,
            child:true

    },
    {
      name: 'Enterprise Terms of Use',
      url: 'policies/enterpriseterms',
      active: false,
      visible: true,
      editMode: true,
            child:true

    },
    {
      name: 'Venue Account Agreement',
      url: 'policies/venueaccountagreement',
      active: false,
      visible: true,
      editMode: true,
            child:true

    },
    {
      name: 'Cookie Policy',
      url: 'policies/cookiepolicy',
      active: false,
      visible: true,
      editMode: true,
            child:true

    },
  ];
  constructor(private PoliciesService: PoliciesService) {}
  ngOnInit() {
    this.getPoliciesTypes();
  }
  getPoliciesTypes() {
    this.PoliciesService.getPoliciesTypes().subscribe((data: any) => {
      let x = data.data.map((element: any) => {
        ({ ...element, Active: 'false' });
      });
      console.log(data.DateRangePickerComponent);
    });
  }
}
