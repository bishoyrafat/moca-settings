import { PoliciesService } from './../policies.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cancellation-policy',
  templateUrl: './cancellation-policy.component.html',
  styleUrls: ['./cancellation-policy.component.css'],
})
export class CancellationPolicyComponent implements OnInit {
  form: FormGroup;
  isInputRequired = false;
  hasEdit = true;
  hasAdd = false;
  bodyContent: string;
  inEditMode = true;
  typeId: any;
  constructor(
    private PoliciesService: PoliciesService,
    private ToastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.typeId = params.get('id');
    });
    if (this.typeId) {
      this.getPolicyById(this.typeId, 1);
    }
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
    if (inEditMode) {
      this.hasAdd = true;
      this.hasEdit = false;
      this.inEditMode = !inEditMode;
    }
  }

  getPolicyById(id: number, PolicyTypes: any) {
    this.PoliciesService.getPoliciesById(id).subscribe((data: any) => {
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
