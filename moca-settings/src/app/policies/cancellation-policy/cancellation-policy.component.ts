import { PoliciesService } from './../policies.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancellation-policy',
  templateUrl: './cancellation-policy.component.html',
  styleUrls: ['./cancellation-policy.component.css'],
})
export class CancellationPolicyComponent implements OnInit {
  form: FormGroup;
  isInputRequired = false;
  hasEdit = false;
  hasAdd = true;
  bodyContent:string
  constructor(private PoliciesService: PoliciesService) {}

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
    if (this.form.invalid) return;
    else {
      console.log(this.form.value);
      this.postPolicyById(1,this.form.value.description );
    }
    this.helper();
  }

  edit() {
    this.helper();
  }
  getPolicyById(id: number,PolicyTypes:any) {
    this.PoliciesService.getPoliciesById(id,PolicyTypes).subscribe((data: any) => {
      this.bodyContent=data.data.description
    });
  }

  postPolicyById(id: number, body: any) {
    this.PoliciesService.postPoliciesById(id, {
      lobSpaceTypeId: null,
      description: body,
    }).subscribe((data: any) => {
    });
  }
}
