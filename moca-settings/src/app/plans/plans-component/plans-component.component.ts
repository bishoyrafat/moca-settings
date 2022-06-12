import { PlansService } from './../plans.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans-component',
  templateUrl: './plans-component.component.html',
  styleUrls: ['./plans-component.component.css'],
})
export class PlansComponentComponent implements OnInit {
  innerNavs: any = [];
  constructor(private plansService: PlansService) {}

  ngOnInit(): void {
    this.plansService.getAllPlanTypes().subscribe((data: any) => {
      this.plansService.setPlanTypes(data.data);

      data.data.forEach((element: any, index: any) => {
        this.innerNavs.push({
          name: element.name,
          url: element.url + '/' + element.id,
          active: index === 0 ? true : false,
          visible: true,
          editMode: true,
          child: true,
        });
      });
    });
  }
}
