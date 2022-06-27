import { Component, OnInit } from '@angular/core';
import { PlansService } from '../plans.service';

@Component({
  selector: 'app-plans-navbar',
  templateUrl: './plans-navbar.component.html',
  styleUrls: ['./plans-navbar.component.css']
})
export class PlansNavbarComponent implements OnInit {
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
