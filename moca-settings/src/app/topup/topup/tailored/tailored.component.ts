import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TopUpService } from '../../topUp.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tailored',
  templateUrl: './tailored.component.html',
  styleUrls: ['./tailored.component.css']
})
export class TailoredComponent implements OnInit {

  form: FormGroup;
  isInputRequired = false;
  hasEdit = true;
  hasAdd = false;
  contentBody: any;
  constructor(private TopUpService: TopUpService,private ToastrService:ToastrService) {}

  ngOnInit() {
    this.getTopUpById(3, 0);

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
      this.updateTopUpById(3,this.form.value.description)
    }
    this.helper();
  }

  edit() {
    this.helper();
  }

  getTopUpById(topUpType: number, id: number) {
    this.TopUpService.getTopUpById(topUpType, id).subscribe((data: any) => {
      this.contentBody=data.data.termsOfUse
    });
  }

  updateTopUpById(topUpType: number, body: any) {
    this.TopUpService.updateTopUpById(topUpType, {
      termsOfUse: body,
      lobSpaceTypeId: 0,
    }).subscribe((data: any) => {
      this.ToastrService.success('Update done Successfuly')

    });
  }
}
