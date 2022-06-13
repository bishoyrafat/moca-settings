import { ActivatedRoute } from '@angular/router';
import { TopUpService } from './../../topUp.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { itopup } from 'src/app/shared/models/topup/topup.model';
@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
})
export class DayComponent implements OnInit {
  form: FormGroup;
  isInputRequired = false;
  hasEdit = true;
  hasAdd = false;
  contentBody: any |itopup;
  typeId: any;
  constructor(
    private TopUpService: TopUpService,
    private ToastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.typeId = params['id']
    });
    this.getTopUpById(this.typeId, 0);

    this.createForm()
  }

  createForm(){
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
      this.updateTopUpById(this.typeId, this.form.value.description);
    }
    this.helper();
  }

  edit() {
    this.helper();
  }

  getTopUpById(topUpType: number, id: number) {
    this.TopUpService.getTopUpById(topUpType, id).subscribe((data: any) => {
      this.contentBody = data.data.termsOfUse;
    });
  }

  updateTopUpById(topUpType: number, body: any) {
    this.TopUpService.updateTopUpById(topUpType, {
      termsOfUse: body,
      lobSpaceTypeId: 0,
    }).subscribe((data: any) => {
      this.ToastrService.success('Update Done Successfully ');
    });
  }
}
