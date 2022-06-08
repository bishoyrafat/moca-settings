import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PoliciesService } from '../policies.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css'],
})
export class PrivacyPolicyComponent implements OnInit {
  form: FormGroup;
  isInputRequired = false;
  hasEdit = true;
  hasAdd = false;
  bodyContent: string;
  inEditMode = false;
  typeId: any;
  constructor(
    private PoliciesService: PoliciesService,
    private ToastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.typeId = params.get('id');
    });
    this.getPolicyById(this.typeId, 1);
    this.form = new FormGroup({
      description: new FormControl('', Validators.required),
    });
  }
  content(e: any) {
    this.form.get('description')?.setValue(e);
  }

  helper() {
    this.isInputRequired = !this.isInputRequired;
    this.hasEdit = !this.hasEdit;
    this.hasAdd = !this.hasAdd;
  }
  saveAndSubmit() {
    console.log(this.form.value);
    this.inEditMode = !this.inEditMode;
    if (this.form.invalid) return;
    else {
      console.log(this.form.value);
      this.postPolicyById(this.typeId, this.form.value.description);
    }
    this.helper();
  }

  edit(inEditMode: any) {
    this.helper();
    if (inEditMode) this.inEditMode = !this.inEditMode;
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
