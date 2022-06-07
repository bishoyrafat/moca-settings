import { PlansService } from './../plans.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans-component',
  templateUrl: './plans-component.component.html',
  styleUrls: ['./plans-component.component.css'],
})
export class PlansComponentComponent implements OnInit {
  innerNavs = [
    {
      name: 'Hourly',
      url: 'plans/hourly',
      active: true,
      visible: true,
      editMode: true,
      child:true
    },
    {
      name: 'Day',
      url: 'plans/day',
      active: false,
      visible: true,
      editMode: true,
      child:true

    },
    {
      name: 'Tailored',
      url: 'plans/tailored',
      active: false,
      visible: true,
      editMode: true,
      child:true

    },
    {
      name: 'Bundle',
      url: 'plans/bundle',
      active: false,
      visible: true,
      editMode: true,
      child:true

    },
  ];
  constructor(private PlansService :PlansService) {}

  ngOnInit(): void {
    this.PlansService.getAllPlanTypes().subscribe((data:any)=>{
      console.log(data.data)
      this.innerNavs.push(data.data)
    })
  }
}
