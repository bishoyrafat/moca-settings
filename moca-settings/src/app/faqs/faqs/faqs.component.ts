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
import { ToastrService } from 'ngx-toastr';

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
  categoryId :any;
  FaqId = 0;
  answerBody: any;
  groups: any[] = [];
  faqsBody: any = [];
  categoryBody: any = [];
  expandedCategory = true;
  disableDropdown = false;
  editable:boolean;
  faqsForm: FormGroup;
  CategoryForm: FormGroup;
  addQuestion: FormGroup;
  deleteCategoryModal= false
  deleteFaqsModal= false
  deletCategoryId = 0
  deletFaqsId = 0

  constructor(
    private FaqService: FaqService,
    private ToastrService: ToastrService
  ) {}

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
      category: new FormControl('', Validators.required),
    });

    this.addQuestion = new FormGroup({
      question: new FormControl(''),
    });
  }

  reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
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
  checkFaqsValidality = false;
  saveAndSubmitForm() {
    if (this.faqsForm.invalid) this.checkFaqsValidality = true;
    else {
      this.inFaqsMode = !this.inFaqsMode;
      this.listMode = !this.listMode;
      if (this.faqsEditMode) {
        console.log(this.faqsForm.value.categoryId);
        if(this.faqsForm.value.categoryId ===0) this.categoryId= null


        this.updateQuestionById(this.FaqId, {
          categoryId: this.categoryId,
          question: this.faqsForm.value.question,
          answer: this.faqsForm.value.answer,
        });
        console.log(this.faqsForm.value);
      } else {
        this.inFaqsMode = !this.inFaqsMode;
        this.listMode = !this.listMode;
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

  checkCategoryValidality = false;
  submitCategory() {
    if (this.categoryEditMode) {
      console.log(this.deletCategoryId);
      this.updateCategoryById(
        this.categoryId,
        this.CategoryForm.get('category')?.value
      );
      this.inModalMode = !this.inModalMode;
      // this.reloadPage();
    } else {
      if (this.CategoryForm.invalid) this.checkCategoryValidality = true;
      else {
        this.postCategory(this.CategoryForm.value.category);
        this.inModalMode = !this.inModalMode;
        // this.reloadPage();
      }
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
    this.updateCategoryOrder(this.categoryBody);
  }
  // **********************************************************
  editCategory(categoryName: any, categoryId: any) {
    this.disableDropdown = true;
    setTimeout(() => {
      this.disableDropdown = false;
    }, 0.0001);
    this.categoryName = categoryName;
    this.categoryId = categoryId;
    console.log('edit', categoryName, categoryId);
    this.inModalMode = !this.inModalMode;
    this.categoryEditMode = true;
    this.CategoryForm.get('category')?.setValue(categoryName);
  }

  deleteCategory(id: any) {
    this.disableDropdown = true
    setTimeout(() => {
      this.disableDropdown = false
    }, 100);
    this.deletCategoryId = id
    this.deleteCategoryModal=!this.deleteCategoryModal

    // this.disableDropdown = !this.disableDropdown;
    // this.deleteCategoryById(id, {
    //   lobSpaceTypeId: null,
    //   deleteRelatedFaqs: true,
    // });
    // this.reloadPage();
  }

  editQuestion(
    id: number,
    categoryName: string,
    question: string,
    answer: string,
    categoryId: number,
    item: any
  ) {
    console.log(id, categoryName, question, answer, categoryId, item);
    // to check if categorized or non-categorized
    if (categoryId === 0) {
      this.FaqId = id;
    }
    console.log(this.categoryId);
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

  cancelBtn(){
    this.deleteCategoryModal=!this.deleteCategoryModal
  }
  deleteBtn(id:any){
    console.log(this.deletCategoryId)
    this.disableDropdown = !this.disableDropdown;
    this.deleteCategoryById(this.deletCategoryId, {
      lobSpaceTypeId: null,
      deleteRelatedFaqs: true,
    });
    this.reloadPage();
   }


  cancelBtn2(){

    console.log('c')
    this.deleteFaqsModal=!this.deleteFaqsModal
  }
  deleteBtn2(id:any){
    this.disableDropdown = true
    setTimeout(() => {
      this.disableDropdown = false;
    }, 500);
    this.deleteQuestionById(this.deletFaqsId);
    this.reloadPage();
   }




  // FAQs APIs
  deleteQuestion(id: number) {
    this.deletFaqsId=id
    this.deleteFaqsModal=!this.deleteFaqsModal
    this.disableDropdown = true
    setTimeout(() => {
      this.disableDropdown = false
    }, 100);
    // this.disableDropdown = true
    // setTimeout(() => {
    //   this.disableDropdown = false;
    // }, 500);
    // this.deleteQuestionById(this.deletFaqsId);
    // this.reloadPage();
  }

  nonCategorized: any ;
  getAllFaqs() {
    this.FaqService.getAllFaqs().subscribe((data: any) => {
      this.nonCategorized = {
        displayOrder: data.data.categories.length - 1,
        faqs: data.data.nonCategorizedFaqs,
        id: 0,
        name: 'Miscellaneous',
      };

      this.groups.push(...data.data.categories);
      console.log(data.data.categories);
      console.log(data.data.nonCategorizedFaqs);
      // data.data.nonCategorizedFaqs.forEach((data:any)=>{
      //   id:,
      //   displayOrder:,
      //   faqs:[{answer:'',displayOrder:''}],
      //   name:,
      // })
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
