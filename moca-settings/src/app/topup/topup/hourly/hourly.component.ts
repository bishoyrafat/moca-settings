import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TopUpService } from '../../topUp.service';
@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.css']
})
export class HourlyComponent implements OnInit {

  form: FormGroup;
  isInputRequired = false;
  hasEdit = true;
  hasAdd = false;
  contentBody: any;
  constructor(private TopUpService: TopUpService) {}

  ngOnInit() {
    this.getTopUpById(1, 1);

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
      this.updateTopUpById(1,this.form.value.description)
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
      lobSpaceTypeId: 1,
    }).subscribe((data: any) => {
    });
  }
}
