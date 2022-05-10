import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
})
export class FaqsComponent implements OnInit {
  form: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.form=new FormGroup({
      spaceId:new FormControl(),
      question:new FormControl(),
      answer:new FormControl(),
    })
  }
  bodyContent(e:any){
    this.form.get('answer')?.setValue(e)
  }
}
