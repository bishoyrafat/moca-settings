import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TopUpService } from '../../topUp.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { itopup } from 'src/app/shared/models/topup/topup.model';

@Component({
  selector: 'app-meeting-space',
  templateUrl: './meeting-space.component.html',
  styleUrls: ['./meeting-space.component.css'],
})
export class MeetingSpaceComponent implements OnInit {
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
      this.typeId = params['id'];
    });
    this.getTopUpById(this.typeId, 0);

    this.createForm();
  }
  content(e: any) {
    this.form.get('description')?.setValue(e);
  }

  createForm() {
    this.form = new FormGroup({
      description: new FormControl('', Validators.required),
    });
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
