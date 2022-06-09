import { ActivatedRoute } from '@angular/router';
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
  rows = 10;
  planId :any
  // planId=13

  constructor(
    private PlansService: PlansService,
    private ToastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.planId = params.get('id');
    });
    this.getPlansById(this.planId, 0);
    this.form = new FormGroup({
      description: new FormControl('', Validators.required),
      points: new FormControl('', Validators.required),
      whatYouGet: new FormControl('', Validators.required),
      termsOfUse: new FormControl('', Validators.required),
    });
  }

  saveAndSubmitForm(saveMode: any) {
    this.rows = 10;
    this.inEditMode = !this.inEditMode;
    this.disableInput = !this.disableInput;
    this.postPlansById(this.planId, this.form.value);
  }
  editForm(
    form: any,
    points: any,
    whatYouGetContent: any,
    termsOfUseContent: any,
    editMode: any
  ) {
    this.inEditMode = false;
    this.disableInput = false;

    this.form.patchValue({
      description: form.description,
      points: points,
      whatYouGet: whatYouGetContent,
      termsOfUse: termsOfUseContent,
    });
    if (editMode === 'editMode') {
      this.rows = 14;
    }
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
      lobSpaceTypeId: 0,
      ...body,
    }).subscribe((data: any) => {
      this.ToastrService.success('Update Done Successfully ');
    });
  }

  getPlansById(planType: number, id: number) {
    this.PlansService.getPlansById(planType, id).subscribe((data: any) => {
      this.pointsContent = data.data.plan.points;
      this.whatYouGetContent = data.data.plan.whatYouGet;
      this.termsOfUseContent = data.data.plan.termsOfUse;
      this.form.get('description').setValue(data.data.plan.description);
    });
  }
}
