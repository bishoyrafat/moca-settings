import { FormGroup, FormControl } from '@angular/forms';
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
  form: FormGroup;
  CategoryForm: FormGroup;
  addQuestion: FormGroup;
  constructor(private FaqService: FaqService) {}

  ngOnInit(): void {
    this.getAllFaqs();
    console.log('groups', this.groups);

    this.form = new FormGroup({
      categoryId: new FormControl(),
      question: new FormControl(),
      answer: new FormControl(),
    });

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
    }, 500);
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
    this.form.get('answer')?.setValue(e);
  }
  saveAndSubmitForm() {
    if (this.faqsEditMode) {
      this.updateQuestionById(this.FaqId, {
        categoryId: this.categoryId,
        question: this.form.value.question,
        answer: this.form.value.answer,
      });
      console.log(this.form.value);
    } else {
      let categoryId = this.form.value.categoryId;
      this.postCategoryById(categoryId, {
        lobSpaceTypeId: null,
        question: this.form.value.question,
        answer: this.form.value.answer,
      });
      console.log(this.form.value);
      this.inFaqsMode = !this.inFaqsMode;
      this.listMode = !this.listMode;
      this.reloadPage();
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
      console.log(this.CategoryForm.value.category);
      this.inModalMode = !this.inModalMode;
      this.reloadPage();
    }
  }
  // drag and drop

  groups: any[] = [];
  //   groups :any[]= [{
  //     id: 1,
  //     title: 'Category 1',
  //     items: [
  //     //   {
  //     //     question: 'Item 1 - Group 1',
  //     //   answer:'answer 1 - G 1'
  //     // },
  //     // {
  //     //   question: 'Item 2 - Group 1',
  //     //   answer:'answer 2 - G 1'
  //     // },
  //   ]
  //   },
  // {
  //   name: "string2",
  //   displayOrder: 1,
  //   faqs: [{id: 1, question: 'how are you?', answer: 'fine', displayOrder: 1},{id: 1, question: 'how are you?', answer: 'fine', displayOrder: 1}],
  //   id: 2,
  // }
  // ];
  newBody: any = [];

  dropItem(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      event.container.data.forEach((element: any, index: any) => {
        element.displayOrder = index + 1;

        this.newBody.push({
          faqId: element.id,
          displayOrder: element.displayOrder,
        });

      });

      this.updateFaqsOrder({
        lobSpaceTypeId: null,
        categoryFaqsDisplayOrderDto: {
          categoryId: event.container.id,
          faqsDisplayOrder: this.newBody
        },
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
   categoryBody :any=[]

  dropGroup(event: any) {
    moveItemInArray(this.groups, event.previousIndex, event.currentIndex);
    event.container.data.forEach((el:any,index:any)=>{
      el.displayOrder = index + 1;
      this.categoryBody.push({
        id:el.id,
        displayOrder:el.displayOrder
      })

      console.log(this.categoryBody)
    })

    this.updateCategoryOrder(0,this.categoryBody)
  }

  editBtn(categoryName: any, categoryId: any) {
    this.categoryName = categoryName;
    this.categoryId = categoryId;
    console.log('edit', categoryName, categoryId);
    this.inModalMode = !this.inModalMode;
    this.categoryEditMode = true;
    this.CategoryForm.get('category')?.setValue(categoryName);
  }

  deleteBtn(id: any) {
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
    console.log(id, question, answer, categoryId);
    this.categoryId = categoryId;
    this.FaqId = id;
    this.inFaqsMode = !this.inFaqsMode;
    this.listMode = !this.listMode;

    this.form.patchValue({
      categoryId: categoryId,
      question: question,
    });
    this.answerBody = answer;
    this.bodyContent(answer);
    this.faqsEditMode = true;
  }
  deleteQuestion(id: number) {
    this.deleteQuestionById(id);
    this.reloadPage();
  }

  getAllFaqs() {
    this.FaqService.getAllFaqs().subscribe((data: any) => {
      console.log(data.data.categories);
      this.groups.push(...data.data.categories);
    });
  }

  postCategory(categoryName: any) {
    this.FaqService.postCategory({
      lobSpaceTypeId: null,
      name: categoryName,
    }).subscribe((data: any) => {
      console.log(data);
    });
  }

  postCategoryById(id: number, body: any) {
    this.FaqService.postCategoryById(id, body).subscribe((data: any) => {
      console.log(data);
    });
  }

  deleteCategoryById(id: number, body: any) {
    this.FaqService.deleteCategoryById(id).subscribe((data: any) => {
      console.log(data);
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

  updateCategoryOrder(id:any ,body:any){
    this.FaqService.updateCategoryOrder(id,body).subscribe((data: any) => {
      console.log(data);
    });
  }

}
