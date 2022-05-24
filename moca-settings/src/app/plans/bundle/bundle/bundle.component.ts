import { PlansService } from './../../plans.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bundle',
  templateUrl: './bundle.component.html',
  styleUrls: ['./bundle.component.css'],
})
export class BundleComponent implements OnInit {
  inEditMode = true;
  disableInput = true;
  form: any;
  pointsContent = '';
  whatYouGetContent = '';
  termsOfUseContent = '';

  constructor(private PlansService: PlansService,private ToastrService:ToastrService) {}
  ngOnInit(): void {
    this.getPlansById(8, 0);
    this.form = new FormGroup({
      description: new FormControl('', Validators.required),
      points: new FormControl('', Validators.required),
      whatYouGet: new FormControl('', Validators.required),
      termsOfUse: new FormControl('', Validators.required),
    });
  }

  saveAndSubmitForm() {
    console.log(this.form.valid)
    this.inEditMode = !this.inEditMode;
    this.disableInput = !this.disableInput;
      this.postPlansById(8, this.form.value);

  }
  editForm(form:any,points:any,whatYouGetContent:any,termsOfUseContent:any) {
    this.inEditMode = false;
    this.disableInput = false;
    this.form.patchValue({
      description:form.description,
      points:points,
      whatYouGet:whatYouGetContent,
      termsOfUse:termsOfUseContent
    })
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
      this.ToastrService.success('Update done Successfuly')

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
