import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PoliciesService } from '../policies.service';
@Component({
  selector: 'app-venue-account-agreement',
  templateUrl: './venue-account-agreement.component.html',
  styleUrls: ['./venue-account-agreement.component.css']
})
export class VenueAccountAgreementComponent implements OnInit {

  form: FormGroup;
  isInputRequired = false;
  hasEdit = false;
  hasAdd = true;
  bodyContent:string
  constructor(private PoliciesService: PoliciesService) {}

  ngOnInit() {
    this.getPolicyById(5,1);
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
      this.postPolicyById(5,this.form.value.description);
    }
    this.helper();
  }

  edit() {
    this.helper();
  }
  getPolicyById(PolicyTypes:number,id: number) {
    this.PoliciesService.getPoliciesById(PolicyTypes,id).subscribe((data: any) => {
      console.log(data);
      this.bodyContent=data.data.description
    });
  }

  postPolicyById(id: number, body: any) {
    this.PoliciesService.postPoliciesById(id, {
      lobSpaceTypeId: 1,
      description: body,
    }).subscribe((data: any) => {
      console.log(data);
    });
  }

}
