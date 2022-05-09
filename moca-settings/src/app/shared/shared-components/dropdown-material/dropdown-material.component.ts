import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-material',
  templateUrl: './dropdown-material.component.html',
  styleUrls: ['./dropdown-material.component.scss']
})
export class DropdownMaterialComponent implements OnInit {
 @Input() panelOpenState = false;
 @Input() expansionHeader:string;
  constructor() { }

  ngOnInit(): void {
  }

}
