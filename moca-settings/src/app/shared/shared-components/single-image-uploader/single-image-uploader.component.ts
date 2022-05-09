import { SharedService } from './../../service/shared-service.service';
import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-single-image-uploader',
  templateUrl: './single-image-uploader.component.html',
  styleUrls: ['./single-image-uploader.component.css'],
})
export class SingleImageUploaderComponent implements OnInit,OnChanges {
  constructor(private sharedService: SharedService) {}

  @Input() inputRequired: boolean;
  @Input() disabled: boolean;
  @Input() label: string;
  @Input() imgUrl: string = './../../../../assets/images/upload.png';
  @Input() apiUrl: string;
  @Input() errMsg: string='';

  @Output() imagesData: EventEmitter<any> = new EventEmitter();
  assetsUrl = environment.assetsUrl;

  ngOnInit(): void {
  }

  ngOnChanges(change:any){

  }
  uploadLegalDocuments(event: any) {
    let file = event.target.files[0];
    if (
      event.target.files.length > 0 &&
      event.target.files[0].type.indexOf('image') > -1
    ) {
      this.imgUrl = './../../../../assets/images/upload.png';
      let formData = new FormData();
      formData.append(file.name, file, file.name);
      this.sharedService
        .uploadSingleImg(this.apiUrl, formData)
        .subscribe((data: any) => {
          this.imagesData.emit(data.dbPath);
          this.imgUrl = data.dbPath;
        });
        this.errMsg=''
    }else{
      this.errMsg='You Must Upload Just An Image'
    }
  }
  DeleteFileAv() {
    this.imgUrl = './../../../../assets/images/upload.png';
    this.imagesData.emit('');
  }
}
