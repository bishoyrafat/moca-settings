import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { style } from '@angular/animations';

@Component({
  selector: 'app-rich-text-field',
  templateUrl: './rich-text-field.component.html',
  styleUrls: ['./rich-text-field.component.css'],
})
export class RichTextFieldComponent implements OnInit, OnChanges {
  editorText = '';
  @Input() labelText: string;
  @Input() errMsg: string;
  @Input() customClass: string = 'rich-text-box';
  @Input() content: string = '';
  @Input() hideLabel: boolean = false;
  @Input() inputRequired: boolean = false;
  @Input() disabled: boolean = true;
  @Input() hideToolbar: boolean = false;

  @Output() bodyContent: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes: any): void {
    if (changes.disabled && changes.disabled.currentValue) {
      this.disabled = changes.disabled?.currentValue;
    }
    this.editorConfig.editable = !this.disabled;
    this.editorConfig.showToolbar = !this.hideToolbar;
  }

  changeEditor() {
    this.bodyContent.emit(this.content);
  }

  editorConfig: AngularEditorConfig = {
    editable: !this.disabled,
    spellcheck: true,
    height: '225px',
    maxHeight: '225px',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    toolbarPosition: 'top',
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: 'Comic Sans MS',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    sanitize: true,
    toolbarHiddenButtons: [
      [
        'unlink',
        'insertImage',
        'insertVideo',
        'insertHorizontalRule',
        'removeFormat',
        'toggleEditorMode',
        'subscript',
        'superscript',
        'customClasses',
        // 'textColor',
        // 'backgroundColor',
      ],
    ],
  };

  // editorConfig: AngularEditorConfig = {
  //   editable: true,
  //   spellcheck: true,
  //   height: '15rem',
  //   minHeight: '5rem',
  //   placeholder: 'Enter text here...',
  //   translate: 'no',
  //   defaultParagraphSeparator: 'p',
  //   defaultFontName: 'Arial',
  //   customClasses: [
  //     {
  //       name: "bold",
  //       class:"bold"
  //     },
  //     {
  //       name: "quote",
  //       class: "quote",
  //     },
  //     {
  //       name: 'redText',
  //       class: 'redText'
  //     },
  //     {
  //       name: "titleText",
  //       class: "titleText",
  //       tag: "h1",
  //     },
  //   ]
  // };
}
