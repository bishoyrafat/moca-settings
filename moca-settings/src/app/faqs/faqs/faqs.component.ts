import { FormGroup, FormControl } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  CdkDragDrop,
  CdkDragEnter,
  CdkDragMove,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
})
export class FaqsComponent implements OnInit {
  inFaqsMode = false;
  inModalMode = false;
  form: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      spaceId: new FormControl(),
      question: new FormControl(),
      answer: new FormControl(),
    });
  }
  bodyContent(e: any) {
    this.form.get('answer')?.setValue(e);
  }
  saveAndSubmitForm() {
    console.log(this.form.value);
    this.inFaqsMode = !this.inFaqsMode;
  }
  showFaqs() {
    this.inFaqsMode = !this.inFaqsMode;
  }

  openModal() {
    this.inModalMode = !this.inModalMode;
  }

  closeModal() {
    this.inModalMode = !this.inModalMode;
  }
  submitModel() {
    this.inModalMode = !this.inModalMode;
  }
  // drag and drop
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  categories: any = [
    {
      name: 'category 1',
      subCategory: ['cat1', 'cat2', 'cat3', 'cat3'],
    },
    {
      name: 'category 2',
      subCategory: ['cat1', 'cat2', 'cat3', 'cat3'],
    },
    {
      name: 'category 3',
      subCategory: ['cat1', 'cat2', 'cat3', 'cat3'],
    },
    {
      name: 'category 4',
      subCategory: ['cat1', 'cat2', 'cat3', 'cat3'],
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      console.log(event);
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }


  @ViewChild('dropListContainer') dropListContainer?: ElementRef;

  public items:any = [
    {
      name: 'category 1',
      subCategory: ['cat1', 'cat2', 'cat3', 'cat4'],
    },
    {
      name: 'category 2',
      subCategory: ['cat1', 'cat2', 'cat3', 'cat4'],
    },
    {
      name: 'category 3',
      subCategory: ['cat1', 'cat2', 'cat3', 'cat4'],
    },
    {
      name: 'category 4',
      subCategory: ['cat1', 'cat2', 'cat3', 'cat4'],
    }
  ]


  dropListReceiverElement?: HTMLElement;
  dragDropInfo?: {
    dragIndex: number;
    dropIndex: number;
  };

  dragEntered(event: CdkDragEnter<number>) {
    const drag = event.item;
    const dropList = event.container;
    const dragIndex = drag.data;
    const dropIndex = dropList.data;

    this.dragDropInfo = { dragIndex, dropIndex };

    const phContainer = dropList.element.nativeElement;
    const phElement = phContainer.querySelector('.cdk-drag-placeholder');

    if (phElement) {
      phContainer.removeChild(phElement);
      phContainer.parentElement?.insertBefore(phElement, phContainer);

      moveItemInArray(this.items, dragIndex, dropIndex);
    }
  }

  dragMoved(event: CdkDragMove<number>) {
    console.log(this.items);
    if (!this.dropListContainer || !this.dragDropInfo) return;

    const placeholderElement =
      this.dropListContainer.nativeElement.querySelector(
        '.cdk-drag-placeholder'
      );

    const receiverElement =
      this.dragDropInfo.dragIndex > this.dragDropInfo.dropIndex
        ? placeholderElement?.nextElementSibling
        : placeholderElement?.previousElementSibling;

    if (!receiverElement) {
      return;
    }

    receiverElement.style.display = 'none';
    this.dropListReceiverElement = receiverElement;
  }

  dragDropped(event: CdkDragDrop<number>) {
    if (!this.dropListReceiverElement) {
      return;
    }

    this.dropListReceiverElement.style.removeProperty('display');
    this.dropListReceiverElement = undefined;
    this.dragDropInfo = undefined;
  }

}
