import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PoliciesService } from '../policies.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { ipolicies } from 'src/app/shared/models/types/policies/policies.model';

@Component({
  selector: 'app-cookie-policy',
  templateUrl: './cookie-policy.component.html',
  styleUrls: ['./cookie-policy.component.css'],
})
export class CookiePolicyComponent implements OnInit {
  form: FormGroup;
  isInputRequired = false;
  hasEdit = true;
  hasAdd = false;
  bodyContent: any | ipolicies;
  inEditMode = false;
  typeId: any;

  constructor(
    private PoliciesService: PoliciesService,
    private ToastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.typeId = params.get('id')
    });
    this.getPolicyById(this.typeId, 1);
    this.createForm()
  }
  content(e: any) {
    this.form.get('description')?.setValue(e);
  }

  createForm() {
    this.form = new FormGroup({
      description: new FormControl(
        this.bodyContent ? this.bodyContent : '',
        Validators.required
      ),
    });
  }
  helper() {
    this.isInputRequired = !this.isInputRequired;
    this.hasEdit = !this.hasEdit;
    this.hasAdd = !this.hasAdd;
  }
  saveAndSubmit() {
    this.inEditMode = !this.inEditMode;
    this.hasAdd = false;
    this.hasEdit = true;
    if (this.form.invalid) return;
    else {
      this.postPolicyById(this.typeId, this.form.value.description);
    }
  }

  edit(inEditMode: any) {
    this.helper();
    if (inEditMode) this.hasAdd = true;
    this.hasEdit = false;
    this.inEditMode = true;
  }
  getPolicyById(PolicyTypes: number, id: number) {
    this.PoliciesService.getPoliciesById(PolicyTypes).subscribe((data: any) => {
      this.bodyContent = data.data.description;
    });
  }

  postPolicyById(id: number, body: any) {
    this.PoliciesService.postPoliciesById(id, {
      lobSpaceTypeId: null,
      description: body,
    }).subscribe((data: any) => {
      this.ToastrService.success('Update Done Successfully ');
    });
  }

}
