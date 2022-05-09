import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { MainParentModel, NavLinksModel } from '../../models/types/navs.model';

@Component({
  selector: 'app-subnav',
  templateUrl: './subnav.component.html',
  styleUrls: ['./subnav.component.css'],
})
export class SubnavComponent implements OnInit {
  constructor(private router:Router) {}

  ngOnInit(): void {}
  @Input() navs:MainParentModel[]
  route(item:any){
    this.router.navigate([item.route])
  }
}
