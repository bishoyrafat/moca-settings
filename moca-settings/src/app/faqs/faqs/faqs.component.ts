import { FaqService } from './../faq.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  CdkDragDrop,
  CdkDragEnter,
  CdkDragMove,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
})
export class FaqsComponent implements OnInit {
  checkCategoryValidality = false;
  inModalMode = false;
  CategoryForm: FormGroup;
  addQuestion: FormGroup;
  deletFaqsId: number;
  deleteFaqsModal: boolean = false;
  disableDropdown: boolean = false;
  groups: any[] = [];
  expandedCategory = true;
  faqsBody: any[] = [];
  categoryBody: any[] = [];
  id: number;
  categoryId: number;
  displayOrder: number;
  type: any;
  deleteCategoryModal = false;
  selectedGroup: any;
  constructor(
    private route: Router,
    private FaqService: FaqService,
    private ToastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllFaqs();
    //  CATEGORY FORM
    this.CategoryForm = new FormGroup({
      category: new FormControl('', Validators.required),
    });
    this.addQuestion = new FormGroup({
      question: new FormControl(''),
    });
  }
  disableDrobdown() {
    this.disableDropdown = true;
    setTimeout(() => {
      this.disableDropdown = false;
    }, 100);
  }
  reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
  addFaq() {
    this.route.navigate(['faqs/editfaq', 'addfaq']);
  }
  addCategory() {
    this.inModalMode = !this.inModalMode;
  }

  closeCategory() {
    this.inModalMode = !this.inModalMode;
  }
  submitCategory() {
    if (this.CategoryForm.invalid) {
      this.checkCategoryValidality = true;
    } else {
      this.postCategory(this.CategoryForm.get('category')?.value);
      this.inModalMode = !this.inModalMode;
      this.updateCategoryById(this.categoryId, {
        lobSpaceTypeId: null,
        name: this.CategoryForm.get('category')?.value,
      });
      this.reloadPage();
    }
  }

  editQuestion(id: any, type: any) {
    this.type = type;
    this.route.navigate(['faqs/editfaq', id]);
  }

  deleteQuestion(id: number) {
    this.disableDrobdown();
    this.deletFaqsId = id;
    this.deleteFaqsModal = !this.deleteFaqsModal;
  }

  editCategory(categoryName: any, categoryId: any, type: any) {
    this.disableDrobdown();
    this.inModalMode = !this.inModalMode;
    this.CategoryForm.get('category')?.setValue(categoryName);
    this.categoryId = categoryId;
  }

  deleteCategory(group: any) {
    this.selectedGroup = group;
    this.deleteCategoryModal = true;
    this.categoryId = group.id;
    this.disableDrobdown();
  }

  submitAddQuestion(id: number) {
    this.postCategoryById(id, {
      lobSpaceTypeId: null,
      question: this.addQuestion.value.question,
      answer: 'Answer can be added here...',
    });
    this.reloadPage();
  }

  cancelCategoryModalBtn() {
    this.deleteCategoryModal = !this.deleteCategoryModal;
  }
  deleteCategoryModalBtn(id: any) {
    this.deleteCategoryById(this.categoryId, {
      lobSpaceTypeId: null,
      deleteRelatedFaqs: true,
    });
    this.reloadPage();
  }

  cancelfaqModalBtn() {
    this.deleteFaqsModal = !this.deleteFaqsModal;
  }
  deletefaqModalBtn() {
    this.deleteQuestionById(this.deletFaqsId);
    this.reloadPage();
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

    });
    this.updateCategoryOrder(this.categoryBody);
  }

  // FAQs APIs

  nonCategorized: any;
  getAllFaqs() {
    this.FaqService.getAllFaqs().subscribe((data: any) => {
      this.nonCategorized = {
        displayOrder: data.data.categories.length - 1,
        faqs: data.data.nonCategorizedFaqs,
        id: 0,
        name: 'Miscellaneous',
      };

      this.groups.push(...data.data.categories, this.nonCategorized);
     
    });
  }

  postCategory(categoryName: any) {
    this.FaqService.postCategory({
      lobSpaceTypeId: null,
      name: categoryName,
    }).subscribe((data: any) => {});
  }

  postCategoryById(id: number, body: any) {
    this.FaqService.postCategoryById(id, body).subscribe((data: any) => {
      this.ToastrService.success('Update Done Successfully ');
    });
  }

  deleteCategoryById(id: number, body: any) {
    this.FaqService.deleteCategoryById(id).subscribe((data: any) => {
      this.ToastrService.success('Update Done Successfully ');
    });
  }

  updateCategoryById(id: number, body: any) {
    this.FaqService.updateCategoryById(id, {
      lobSpaceTypeId: null,
      name: body,
    }).subscribe((data: any) => {
      this.ToastrService.success('Update Done Successfully ');
    });
  }

  deleteQuestionById(id: Number) {
    this.FaqService.deleteQuestionById(id).subscribe((data: any) => {
      this.ToastrService.success('Delete done Successfuly');
    });
  }
  updateQuestionById(id: number, body: any) {
    this.FaqService.updateQuestionById(id, {
      lobSpaceTypeId: null,
      ...body,
    }).subscribe((data: any) => {
      this.ToastrService.success('Update Done Successfully ');
    });
  }

  updateFaqsOrder(body: any) {
    this.FaqService.updateFaqsOrder(body).subscribe((data: any) => {
      this.ToastrService.success('Update Done Successfully ');
    });
  }

  updateCategoryOrder(body: any) {
    this.FaqService.updateCategoryOrder(body).subscribe((data: any) => {
      this.ToastrService.success('Update Done Successfully ');
    });
  }
}
