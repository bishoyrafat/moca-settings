import { FaqService } from './../faq.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-faq',
  templateUrl: './edit-faq.component.html',
  styleUrls: ['./edit-faq.component.css'],
})
export class EditFaqComponent implements OnInit {
  faqsForm: FormGroup;
  checkFaqsValidality = false;
  answerBody: any;
  groups: any[] = [];
  categoryId: number;
  faqId: number;
  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private FaqService: FaqService
  ) {}

  ngOnInit(): void {
    this.categoryId = this.activatedRoute.snapshot.params['id'];
    this.getCategoryById(this.categoryId);
    this.getAllFaqs();
    // FAQS FORM
    this.faqsForm = new FormGroup({
      categoryId: new FormControl('', Validators.required),
      question: new FormControl('', Validators.required),
      answer: new FormControl('', Validators.required),
    });
  }
  bodyContent(e: any) {
    this.faqsForm.get('answer')?.setValue(e);
  }

  closeFaqs() {
    this.route.navigate(['/faqs']);
  }
  saveFaqs() {
    this.updateQuestionById(this.faqId, {
      categoryId: this.categoryId,
      question: this.faqsForm.value.question,
      answer: this.faqsForm.value.answer,
    });
    if (this.faqsForm.invalid) this.checkFaqsValidality=true;
    else {
      this.route.navigate(['/faqs']);
    }
  }

  getCategoryById(id: number) {
    this.FaqService.getCategoryById(id).subscribe((data: any) => {
      console.log(data.data);
      data.data.forEach((el: any) => {
        this.faqId = el.id;
        this.faqsForm.patchValue({
          categoryId: el.categoryId,
          question: el.question,
        });
        this.answerBody = el.answer;
      });
    });
  }

  getAllFaqs() {
    this.FaqService.getAllFaqs().subscribe((data: any) => {
      console.log(data.data);
      this.groups.push(...data.data.categories);
    });
  }

  updateQuestionById(id: number, body: any) {
    this.FaqService.updateQuestionById(id, body).subscribe((data: any) => {
      console.log(data);
    });
  }
}
