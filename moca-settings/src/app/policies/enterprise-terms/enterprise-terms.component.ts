import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PoliciesService } from '../policies.service';

@Component({
  selector: 'app-enterprise-terms',
  templateUrl: './enterprise-terms.component.html',
  styleUrls: ['./enterprise-terms.component.css']
})
export class EnterpriseTermsComponent implements OnInit {

  form: FormGroup;
  isInputRequired = false;
  hasEdit = false;
  hasAdd = true;
  bodyContent:string
  inEditMode=false

  constructor(private PoliciesService: PoliciesService) {}

  ngOnInit() {
    this.getPolicyById(4,1);
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
    if (this.form.invalid) return;
    else {
      this.postPolicyById(4,this.form.value.description);
    }
    this.helper();
  }

  edit(inEditMode:any) {
    this.helper();
    if(inEditMode)
    this.inEditMode=!this.inEditMode
  }
  getPolicyById(PolicyTypes:number,id: number) {
    this.PoliciesService.getPoliciesById(PolicyTypes,id).subscribe((data: any) => {
      this.bodyContent=data.data.description
    });
  }

  postPolicyById(id: number, body: any) {
    this.PoliciesService.postPoliciesById(id, {
      lobSpaceTypeId: 1,
      description: body,
    }).subscribe((data: any) => {
    });
  }
}
