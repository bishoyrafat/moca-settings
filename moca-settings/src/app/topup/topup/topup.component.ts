import { TopUpService } from './../topUp.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-topup',
  templateUrl: './topup.component.html',
  styleUrls: ['./topup.component.css'],
})
export class TopupComponent {
  innerNavs: any[] = [];
  navs: any;

  constructor(
    private TopUpService: TopUpService,
    private activeRouter: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit() {
    this.TopUpService.getAllTopUpTypes().subscribe((data: any) => {
      this.navs = data.data;
      this.routeToFirstElement();
      console.log(data.data);
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
          'topup/hourly/' + this.navs[0].id,
        ]);
      } else {
      }
    });
  }
}
