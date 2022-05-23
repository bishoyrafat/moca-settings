import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  CdkDragDrop,
  CdkDragEnter,
  CdkDragMove,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { FaqService } from '../faq.service';
@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
})
export class FaqsComponent implements OnInit {
  inFaqsMode = false;
  inModalMode = false;
  listMode = true;
  categoryEditMode = false;
  faqsEditMode = false;
  categoryName = '';
  categoryId = 0;
  FaqId = 0;
  answerBody: any;
  groups: any[] = [];
  faqsBody: any = [];
  categoryBody: any = [];
  expandedCategory=true
  faqsForm: FormGroup;
  CategoryForm: FormGroup;
  addQuestion: FormGroup;
  constructor(private FaqService: FaqService) {}

  ngOnInit(): void {
    this.getAllFaqs();
    // FAQS FORM
    this.faqsForm = new FormGroup({
      categoryId: new FormControl('', Validators.required),
      question: new FormControl('', Validators.required),
      answer: new FormControl('', Validators.required),
    });
    //  CATEGORY FORM
    this.CategoryForm = new FormGroup({
      category: new FormControl(''),
    });

    this.addQuestion = new FormGroup({
      question: new FormControl(''),
    });
  }

  reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  submitAddQuestion(id: number) {
    console.log(this.addQuestion.value.question, id);

    this.postCategoryById(id, {
      lobSpaceTypeId: null,
      question: this.addQuestion.value.question,
      answer: 'Answer can be added here...',
    });
    this.reloadPage();
  }

  bodyContent(e: any) {
    this.faqsForm.get('answer')?.setValue(e);
  }

  // first check if form is valid
  // check if in faqsEditMode to call updateQuestionById()
  // else postCategoryById()
  saveAndSubmitForm() {
    if (this.faqsForm.invalid) return;
    else {
      if (this.faqsEditMode) {
        this.updateQuestionById(this.FaqId, {
          categoryId: this.categoryId,
          question: this.faqsForm.value.question,
          answer: this.faqsForm.value.answer,
        });
        console.log(this.faqsForm.value);
      } else {
        let categoryId = this.faqsForm.value.categoryId;
        this.postCategoryById(categoryId, {
          lobSpaceTypeId: null,
          question: this.faqsForm.value.question,
          answer: this.faqsForm.value.answer,
        });
        console.log(this.faqsForm.value);
        this.inFaqsMode = !this.inFaqsMode;
        this.listMode = !this.listMode;
        this.reloadPage();
      }
    }
  }
  closeFaqs() {
    this.inFaqsMode = !this.inFaqsMode;
    this.listMode = !this.listMode;
  }

  showFaqs() {
    this.inFaqsMode = !this.inFaqsMode;
    this.listMode = !this.listMode;
  }

  openModal() {
    this.inModalMode = !this.inModalMode;
  }

  closeCategory() {
    this.inModalMode = !this.inModalMode;
  }

  submitCategory() {
    if (this.categoryEditMode) {
      console.log('after');
      this.updateCategoryById(
        this.categoryId,
        this.CategoryForm.get('category')?.value
      );
      this.inModalMode = !this.inModalMode;
      this.reloadPage();
    } else {
      this.postCategory(this.CategoryForm.value.category);
      this.inModalMode = !this.inModalMode;
      this.reloadPage();
    }
  }
  // ************************
  // drag and drop
  // ************************
  dropItem(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      event.container.data.forEach((element: any, index: any) => {
        element.displayOrder = index + 1;
        this.faqsBody.push({
          faqId: element.id,
          displayOrder: element.displayOrder,
        });
      });
      this.updateFaqsOrder({
        lobSpaceTypeId: null,
        categoryFaqsDisplayOrderDto: [
          {
            categoryId: event.container.id,
            faqsDisplayOrder: this.faqsBody,
          },
        ],
      });
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  getConnectedList(): any[] {
    return this.groups.map((x: any) => `${x.id}`);
  }

  dropGroup(event: any) {
    moveItemInArray(this.groups, event.previousIndex, event.currentIndex);
    event.container.data.forEach((el: any, index: any) => {
      el.displayOrder = index + 1;
      this.categoryBody.push({
        id: el.id,
        displayOrder: el.displayOrder,
      });

      console.log(this.categoryBody);
    });
    this.updateCategoryOrder( this.categoryBody);
  }
  // **********************************************************
  editCategory(categoryName: any, categoryId: any) {
    this.categoryName = categoryName;
    this.categoryId = categoryId;
    console.log('edit', categoryName, categoryId);
    this.inModalMode = !this.inModalMode;
    this.categoryEditMode = true;
    this.CategoryForm.get('category')?.setValue(categoryName);
  }

  deleteCategory(id: any) {
    console.log(id);
    this.deleteCategoryById(id, {
      lobSpaceTypeId: null,
      deleteRelatedFaqs: true,
    });
    this.reloadPage();
  }

  editQuestion(
    id: number,
    categoryName: string,
    question: string,
    answer: string,
    categoryId: number
  ) {
    this.categoryId = categoryId;
    this.FaqId = id;
    this.inFaqsMode = !this.inFaqsMode;
    this.listMode = !this.listMode;

    this.faqsForm.patchValue({
      categoryId: categoryId,
      question: question,
    });
    this.answerBody = answer;
    this.bodyContent(answer);
    this.faqsEditMode = true;
  }

  // FAQs APIs
  deleteQuestion(id: number) {
    this.deleteQuestionById(id);
    this.reloadPage();
  }

  getAllFaqs() {
    this.FaqService.getAllFaqs().subscribe((data: any) => {
      this.groups.push(...data.data.categories);
    });
  }

  postCategory(categoryName: any) {
    this.FaqService.postCategory({
      lobSpaceTypeId: null,
      name: categoryName,
    }).subscribe((data: any) => {
    });
  }

  postCategoryById(id: number, body: any) {
    this.FaqService.postCategoryById(id, body).subscribe((data: any) => {
    });
  }

  deleteCategoryById(id: number, body: any) {
    this.FaqService.deleteCategoryById(id).subscribe((data: any) => {
    });
  }

  updateCategoryById(id: number, body: any) {
    this.FaqService.updateCategoryById(id, {
      lobSpaceTypeId: null,
      name: body,
    }).subscribe((data: any) => {
      console.log(data);
    });
  }

  deleteQuestionById(id: Number) {
    this.FaqService.deleteQuestionById(id).subscribe((data: any) => {
      console.log(data);
    });
  }
  updateQuestionById(id: number, body: any) {
    this.FaqService.updateQuestionById(id, {
      lobSpaceTypeId: null,
      ...body,
    }).subscribe((data: any) => {
      console.log(data);
    });
  }

  updateFaqsOrder(body: any) {
    this.FaqService.updateFaqsOrder(body).subscribe((data: any) => {
      console.log(data);
    });
  }

  updateCategoryOrder(body: any) {
    this.FaqService.updateCategoryOrder(body).subscribe((data: any) => {
      console.log(data);
    });
  }
}
