import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse-button',
  templateUrl: './collapse-button.component.html',
  styleUrls: ['./collapse-button.component.css']
})
export class CollapseButtonComponent implements OnInit {
  opened:boolean=true
  @Input() title:string;
  @Input() customClass:string;
  @Input() url:string;
  @Input() showIcon:boolean=true
  @Input() showEditIcon:boolean=false
  

  toggleCollapse(){
    if(this.showIcon){
      this.opened=!this.opened
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
