import { ActivatedRoute, Router } from '@angular/router';
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
  planId: any;
  selectedPlan: any;

  constructor(
    private PlansService: PlansService,
    private ToastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.getMainPlannType();
    this.activatedRoute.params.subscribe((params) => {
      this.planId=params['id']
      this.getPlansById(params['id'], 0);
    });
    this.createForm();
  }

  getMainPlannType() {
    this.PlansService.planTypes.subscribe((data: any) => {
      let planDefault = data.find((el: any) => {
        return el.name === 'Hourly';
      });
      this.route.navigate([planDefault.url, planDefault.id]);
    });
  }
  getPlansById(planType: number, id: number) {
    this.PlansService.getPlansById(planType, id).subscribe((data: any) => {
      this.selectedPlan = data.data.plan;
      this.createForm();
    });
  }
  createForm() {
    this.form = new FormGroup({
      description: new FormControl(
        this.selectedPlan ? this.selectedPlan.description : '',
        Validators.required
      ),
      points: new FormControl(
        this.selectedPlan ? this.selectedPlan.points : '',
        Validators.required
      ),
      whatYouGet: new FormControl(
        this.selectedPlan ? this.selectedPlan.whatYouGet : '',
        Validators.required
      ),
      termsOfUse: new FormControl(
        this.selectedPlan ? this.selectedPlan.termsOfUse : '',
        Validators.required
      ),
    });
  }

  editForm() {
    this.inEditMode = false;
    this.disableInput = false;
    this.createForm();
  }

  content(e: any, type: string) {
    this.form.get(type).setValue(e);
  }

  saveAndSubmitForm() {
    this.inEditMode = !this.inEditMode;
    this.disableInput = !this.disableInput;
    this.postPlansById(this.planId, this.form.value);
  }
  postPlansById(planType: number, body: any) {
    this.PlansService.postPlansById(planType, {
      lobSpaceTypeId: 0,
      ...body,
    }).subscribe((data: any) => {
      this.ToastrService.success('Update Done Successfully ');
    });
  }
}
