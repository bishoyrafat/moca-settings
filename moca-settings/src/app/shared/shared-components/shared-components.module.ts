import { SingleImageUploaderComponent } from './single-image-uploader/single-image-uploader.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyInputComponent } from './currency-input/currency-input.component';
import { MainModalComponent } from './main-modal/main-modal.component';
import { InfoModalComponent } from './info-modal/info-modal.component';
import { PromptModalComponent } from './prompt-modal/prompt-modal.component';

import { InputWithImgComponent } from './input-with-img/input-with-img.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SubnavComponent } from './subnav/subnav.component';
import { HttpClientModule } from '@angular/common/http';
import { TitleComponent } from './title/title.component';
import { DropdownFieldComponent } from './dropdown-field/dropdown-field.component';
import { RichTextFieldComponent } from './rich-text-field/rich-text-field.component';
import { InternalTableComponent } from './internal-table/internal-table.component';
import { TimeInputComponent } from './time-input/time-input.component';
import { MultiSelectDropdownComponent } from './multi-select-dropdown/multi-select-dropdown.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { LoadingComponent } from './loading/loading.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';
import { InnerNavComponent } from './inner-nav/inner-nav.component';
import { BodyTemplateComponent } from './body-template/body-template.component';
import { CollapseButtonComponent } from './collapse-button/collapse-button.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { InnerNavWithoutRoutingComponent } from './inner-nav-without-routing/inner-nav-without-routing.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { DropdownMaterialComponent } from './dropdown-material/dropdown-material.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { TextAreaComponent } from './text-area/text-area.component';
import { SelectOptionFieldComponent } from './select-option-field/select-option-field.component';
import { InputFieldComponent } from './input-field/input-field.component';

@NgModule({
  declarations: [
    CurrencyInputComponent,
    MainModalComponent,
    InfoModalComponent,
    PromptModalComponent,
    InputWithImgComponent,
    SearchInputComponent,
    SubnavComponent,
    TitleComponent,
    DropdownFieldComponent,
    RichTextFieldComponent,
    InternalTableComponent,
    TimeInputComponent,
    MultiSelectDropdownComponent,
    LoadingComponent,
    InfoBoxComponent,
    DateRangePickerComponent,
    InnerNavComponent,
    BodyTemplateComponent,
    CollapseButtonComponent,
    SingleImageUploaderComponent,
    ToggleButtonComponent,
    InnerNavWithoutRoutingComponent,
    CarouselComponent,
    DeleteModalComponent,
    DropdownMaterialComponent,
    TextAreaComponent,
    SelectOptionFieldComponent,
    InputFieldComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
    QuillModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    AngularEditorModule,
    MatSelectModule,
    MatCheckboxModule,
    SlickCarouselModule,
    MatExpansionModule,
  ],
  exports: [
    CurrencyInputComponent,
    InfoModalComponent,
    PromptModalComponent,
    InputWithImgComponent,
    SearchInputComponent,
    SubnavComponent,
    TitleComponent,
    DropdownFieldComponent,
    RichTextFieldComponent,
    InternalTableComponent,
    TimeInputComponent,
    MultiSelectDropdownComponent,
    LoadingComponent,
    InfoBoxComponent,
    DateRangePickerComponent,
    InnerNavComponent,
    BodyTemplateComponent,
    SingleImageUploaderComponent,
    CollapseButtonComponent,
    MainModalComponent,
    ToggleButtonComponent,
    InnerNavWithoutRoutingComponent,
    CarouselComponent,
    DeleteModalComponent,
    DropdownMaterialComponent,
    TextAreaComponent,
    SelectOptionFieldComponent,
    InputFieldComponent,
  ],
})
export class SharedComponentsModule {}
