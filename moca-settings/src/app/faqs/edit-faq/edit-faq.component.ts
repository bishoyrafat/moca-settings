import { filter } from 'rxjs';
import { FaqService } from './../faq.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
  categoryId: any;
  categoryParams: any;
  faqId: number;
  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private FaqService: FaqService,
    private ToastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.categoryId = this.activatedRoute.snapshot.params['id'];
    this.categoryParams = this.activatedRoute.snapshot.queryParams;

    console.log(this.categoryParams);
    console.log(this.categoryId);
    this.getAllFaqs();

    if (this.categoryParams.noncategorized) {
      this.getAllNonCategoriesFaqs();
      this.categoryId = null;
      this.faqId = this.categoryParams.noncategorized;
    } else if (this.categoryId !== 'addfaq') {
      console.log(this.categoryParams.faq)
      this.faqId=this.categoryParams.faq
      this.getFaqById(this.categoryParams.faq);
    }

    // FAQS FORM
    this.faqsForm = new FormGroup({
      categoryId: new FormControl('', Validators.required),
      question: new FormControl('', Validators.required),
      answer: new FormControl('', Validators.required),
    });
  }

  reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
  bodyContent(e: any) {
    this.faqsForm.get('answer')?.setValue(e);
  }

  closeFaqs() {
    this.route.navigate(['/faqs']);
  }

  saveFaqs() {
    console.log(this.faqsForm.value);
    console.log(this.faqId);
    this.updateQuestionById(this.faqId, {
      categoryId: this.categoryId,
      question: this.faqsForm.value.question,
      answer: this.faqsForm.value.answer,
    });
    if (this.faqsForm.invalid) this.checkFaqsValidality = true;
    else {
      this.route.navigate(['/faqs']);
    }

    if (this.categoryId === 'addfaq') {
      this.postCategoryById(this.faqsForm.get('categoryId')?.value, {
        lobSpaceTypeId: null,
        question: this.faqsForm.get('question')?.value,
        answer: this.faqsForm.get('answer')?.value,
      });
    }
  }

  getCategoryById(id: number) {
    this.FaqService.getCategoryById(id).subscribe((data: any) => {
      // console.log(el);
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
      let nonCategorized = {
        displayOrder: data.data.categories.length - 1,
        faqs: data.data.nonCategorizedFaqs,
        id: 0,
        name: 'Miscellaneous',
      };
      this.groups.push(...data.data.categories, nonCategorized);
    });
  }

  updateQuestionById(id: number, body: any) {
    this.FaqService.updateQuestionById(id, body).subscribe((data: any) => {
      this.ToastrService.success('Update Done Successfully ');
      this.reloadPage()
    });
  }

  getAllNonCategoriesFaqs() {
    this.FaqService.getAllNonCategoriesFaqs().subscribe((data: any) => {
      let nonCategorizedObject = data.data.nonCategorizedFaqs.find(
        (el: any) => {
          return el.id == this.categoryParams.noncategorized;
        }
      );
      console.log(nonCategorizedObject);
      this.faqsForm.patchValue({
        categoryId: 0,
      });
      this.faqsForm.get('question')?.setValue(nonCategorizedObject.question);
      this.faqsForm.get('answer')?.setValue(nonCategorizedObject.answer);
      this.answerBody = nonCategorizedObject.answer;
    });
  }

  postCategoryById(id: number, body: any) {
    this.FaqService.postCategoryById(id, body).subscribe((data: any) => {
      this.ToastrService.success('Update Done Successfully ');
      this.reloadPage()

    });
  }

  getFaqById(id:any){
    this.FaqService.getFaqById(id).subscribe((data:any)=>{
      console.log(data.data)
      this.faqsForm.get('categoryId')?.setValue(data.data.categoryId)
      this.faqsForm.get('question')?.setValue(data.data.question)
      this.faqsForm.get('answer')?.setValue(data.data.answer)
      this.answerBody = data.data.answer

      // data.data.
    })
  }
}
