import { PoliciesService } from './../policies.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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
  bodyContent:string
  inEditMode=false
  constructor(private PoliciesService: PoliciesService,private ToastrService:ToastrService) {}

  ngOnInit() {
    this.getPolicyById(1,1);
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
    console.log(this.form.value)
    this.inEditMode=!this.inEditMode
    if (this.form.invalid) return;
    else {
      console.log(this.form.value);
      this.postPolicyById(1,this.form.value.description );
    }
    this.helper();
  }

  edit(inEditMode:any) {
    this.helper();
    if(inEditMode)
    this.inEditMode=!this.inEditMode
  }

  getPolicyById(id: number,PolicyTypes:any) {
    this.PoliciesService.getPoliciesById(id,PolicyTypes).subscribe((data: any) => {
      this.bodyContent=data.data.description
    });
  }

  postPolicyById(id: number, body: any) {
    this.PoliciesService.postPoliciesById(id, {
      lobSpaceTypeId: 1,
      description: body,
    }).subscribe((data: any) => {
      this.ToastrService.success('Update done Successfuly')
    });
  }
}
