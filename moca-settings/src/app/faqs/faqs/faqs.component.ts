import { FaqService } from './../faq.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs';

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
  ) {
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
  }

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
  // reloadPage() {
  //   setTimeout(() => {
  //     window.location.reload();
  //   }, 2000);
  // }
  addFaq() {
    this.route.navigate(['faqs/editfaq', 'addfaq']);
  }
  addCategory() {
    this.inModalMode = !this.inModalMode;
  }

  closeCategory() {
    this.inModalMode = !this.inModalMode;
    this.CategoryForm.reset();
  }
  submitCategory() {
    if (this.CategoryForm.invalid) {
      this.checkCategoryValidality = true;
    } else {
      if (this.type === 'categoryEditMode') {
        this.updateCategoryById(this.categoryId, {
          lobSpaceTypeId: null,
          name: this.CategoryForm.get('category')?.value,
        });
        this.inModalMode = !this.inModalMode;
      } else {
        this.postCategory(this.CategoryForm.get('category')?.value);
        this.inModalMode = !this.inModalMode;
      }
    }
  }

  editQuestion(id: any, faqId: any, type: any) {
    if (id === 0) {
      this.route.navigate(['faqs/editfaq', id], {
        queryParams: { noncategorized: faqId },
      });
    } else {
      this.type = type;
      this.route.navigate(['faqs/editfaq', id], {
        queryParams: { faq: faqId },
      });
    }
  }

  deleteQuestion(id: number) {
    this.disableDrobdown();
    this.deletFaqsId = id;
    this.deleteFaqsModal = !this.deleteFaqsModal;
  }

  editCategory(categoryName: any, categoryId: any, type: any) {
    this.type = type;
    this.categoryId = categoryId;
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
    this.addQuestion.reset()
  }

  cancelCategoryModalBtn() {
    this.deleteCategoryModal = !this.deleteCategoryModal;
  }
  deleteCategoryModalBtn(id: any) {
    const index = this.groups.findIndex((el: any) => {
      return el.id === id;
    });
    this.groups.splice(index, 1);

    this.deleteCategoryById(this.categoryId, {
      lobSpaceTypeId: null,
      deleteRelatedFaqs: true,
    });
    this.deleteCategoryModal = !this.deleteCategoryModal;
  }

  cancelfaqModalBtn() {
    this.deleteFaqsModal = !this.deleteFaqsModal;
  }

  deletefaqModalBtn(id: any) {
    this.groups.forEach((el: any) => {
      const index = el.faqs.findIndex((object: any) => {
        return object.id === id;
      });
      el.faqs.splice(index, 1);
    });
    this.deleteQuestionById(this.deletFaqsId);
    this.deleteFaqsModal = !this.deleteFaqsModal;
  }
  // ************************
  // drag and drop
  // ************************
  dropItem(event: any) {
    if (event.previousContainer === event.container) {
      this.faqsBody = [];
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
    this.updateCategoryOrder(
      this.categoryBody.slice(0, this.categoryBody.length - 1)
    );
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
      this.groups = [];
      this.groups.push(...data.data.categories, this.nonCategorized);
    });
  }

  postCategory(categoryName: any) {
    this.FaqService.postCategory({
      lobSpaceTypeId: null,
      name: categoryName,
    }).subscribe((data: any) => {
      this.ToastrService.success('Update Done Successfully');
      this.groups = [];
      this.getAllFaqs();
    });
  }

  postCategoryById(id: number, body: any) {
    this.FaqService.postCategoryById(id, body).subscribe((data: any) => {
      this.ToastrService.success('Update Done Successfully');
      this.groups = [];
      this.getAllFaqs();
    });
  }

  deleteCategoryById(id: number, body: any) {
    this.FaqService.deleteCategoryById(id).subscribe((data: any) => {
      this.ToastrService.success('Update Done Successfully');
      this.groups = [];
      this.getAllFaqs();
    });
  }

  updateCategoryById(id: number, body: any) {
    this.FaqService.updateCategoryById(id, body).subscribe((data: any) => {
      this.ToastrService.success('Update Done Successfully');
      this.getAllFaqs();
    });
  }

  deleteQuestionById(id: Number) {
    this.FaqService.deleteQuestionById(id).subscribe((data: any) => {
      this.ToastrService.success('Delete done Successfuly');
      this.groups = [];

      this.getAllFaqs();
    });
  }
  updateQuestionById(id: any, body: any) {
    id === undefined ? null : id;
    this.FaqService.updateQuestionById(id, {
      lobSpaceTypeId: null,
      ...body,
    }).subscribe((data: any) => {
      this.ToastrService.success('Update Done Successfully');
      this.getAllFaqs();
    });
  }

  updateFaqsOrder(body: any) {
    this.FaqService.updateFaqsOrder(body).subscribe((data: any) => {
      this.ToastrService.success('Update Done Successfully ');
      this.getAllFaqs();
    });
  }

  updateCategoryOrder(body: any) {
    this.FaqService.updateCategoryOrder(body).subscribe((data: any) => {
      this.ToastrService.success('Update Done Successfully ');
      this.getAllFaqs();
    });
  }
}
