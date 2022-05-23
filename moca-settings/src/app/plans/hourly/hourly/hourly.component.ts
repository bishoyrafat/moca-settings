import { PlansService } from './../../plans.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.css'],
})
export class HourlyComponent implements OnInit {
  inEditMode = false;
  disableInput = false;
  form: any;
  pointsContent = '';
  whatYouGetContent = '';
  termsOfUseContent = '';
  constructor(private PlansService: PlansService) {}
  ngOnInit(): void {
    this.getPlansById(5, 0);
    this.form = new FormGroup({
      description: new FormControl('', Validators.required),
      points: new FormControl('', Validators.required),
      whatYouGet: new FormControl('', Validators.required),
      termsOfUse: new FormControl('', Validators.required),
    });
  }

  saveAndSubmitForm() {
    this.inEditMode = true;
    this.disableInput = true;
    if (this.form.invalid) return;
    else {
      console.log(this.form.value);
      this.postPlansById(5, this.form.value);
    }
  }
  editForm() {
    this.inEditMode = false;
    this.disableInput = false;
  }

  content(e: any, type: string) {
    if (type === 'points') {
      this.form.get('points').setValue(e);
    }
    if (type === 'termsOfUse') {
      this.form.get('termsOfUse').setValue(e);
    }
    if (type === 'whatYouGet') {
      this.form.get('whatYouGet').setValue(e);
    }
  }

  postPlansById(planType: number, body: any) {
    this.PlansService.postPlansById(planType, {
      "lobSpaceTypeId": 0,
      ...body
    }).subscribe((data: any) => {
    });
  }

  getPlansById(planType: number, id: number) {
    this.PlansService.getPlansById(planType, id).subscribe((data: any) => {
      this.pointsContent =data.data.plan.points ;
      this.whatYouGetContent=data.data.plan.whatYouGet
      this.termsOfUseContent =data.data.plan.termsOfUse
      this.form.get('description').setValue(data.data.plan.description)
    });
  }
}
