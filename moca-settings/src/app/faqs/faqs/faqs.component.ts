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
  listMode = true;
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
    this.listMode = !this.listMode

  }
  showFaqs() {
    this.inFaqsMode = !this.inFaqsMode;
    this.listMode = !this.listMode
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
  groups = [{
    id: 1,
    title: 'Group 1',
    items: [{
      name: 'Item 1 - Group 1'
    },
    {
      name: 'Item 2 - Group 1'
    },
    {
      name: 'Item 3 - Group 1'
    },
    {
      name: 'Item 4 - Group 1'
    }]
  },
  {
    id: 2,
    title: 'Group 2',
    items: [{
      name: 'Item 1 - Group 2'
    },
    {
      name: 'Item 2 - Group 2'
    },
    {
      name: 'Item 3 - Group 2'
    },
    {
      name: 'Item 4 - Group 2'
    }]
  },
  {
    id: 3,
    title: 'Group 3',
    items: [{
      name: 'Item 1 - Group 3'
    },
    {
      name: 'Item 2 - Group 3'
    },
    {
      name: 'Item 3 - Group 3'
    },
    {
      name: 'Item 4 - Group 3'
    }]
  }];

  dropItem(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(this.groups, event.previousIndex, event.currentIndex)

    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  getConnectedList(): any[] {
    return this.groups.map(x => `${x.id}`);
  }

  dropGroup(event: any) {
    moveItemInArray(this.groups, event.previousIndex, event.currentIndex);
    console.log(this.groups, event.previousIndex, event.currentIndex)

  }
}
