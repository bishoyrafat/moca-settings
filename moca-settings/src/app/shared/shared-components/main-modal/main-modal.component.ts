import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-modal',
  templateUrl: './main-modal.component.html',
  styleUrls: ['./main-modal.component.css']
})
export class MainModalComponent implements OnInit {

  @Input() customClass:string

  constructor() { }

  ngOnInit(): void {
  }

}
