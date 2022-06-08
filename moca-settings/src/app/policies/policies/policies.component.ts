import { PoliciesService } from './../policies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css'],
})
export class PoliciesComponent implements OnInit {
  constructor(
    private activeRouter: ActivatedRoute,
    private router: Router,
    private PoliciesService: PoliciesService
  ) {}
  innerNavs: any[] = [];
  navs: any;
  ngOnInit(): void {
    this.getPoliciesTypes();
  }
  getPoliciesTypes() {
    this.PoliciesService.getPoliciesTypes().subscribe((data: any) => {
      this.navs = data.data;
      this.routeToFirstElement();
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

  routeToFirstElement() {
    this.activeRouter.firstChild?.params.subscribe((data) => {
      if (!data['id']) {
        this.router.navigate([
          'policies/cancellationpolicy/' + this.navs[0].id,
        ]);
      } else {
      }
    });
  }
}
