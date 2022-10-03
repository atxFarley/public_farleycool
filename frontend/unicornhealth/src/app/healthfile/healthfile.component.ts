import { Component,  OnChanges,  OnInit, SimpleChanges } from '@angular/core';
import { FileuploadService } from '../services/fileupload.service';
import { HealthFile } from '../interfaces/healthFile';


@Component({
  selector: 'app-healthfile',
  templateUrl: './healthfile.component.html',
  styleUrls: ['./healthfile.component.css']
})
export class HealthfileComponent implements OnInit,OnChanges {


  fileName = '';

  uploadFile: File; 
  uploadedHealthFile: HealthFile;



  constructor(private healthFileUploadService: FileuploadService) {
    this.uploadFile = {} as File;
    this.uploadedHealthFile = {} as HealthFile;
   }

  ngOnInit(): void {
 
  }
  ngOnChanges(changes: SimpleChanges): void {
      
  }

  fileUpload(): any {
    console.log('fileUpload()');
    this.fileName = this.uploadFile.name;
    console.log("fileName: " + this.fileName);
    this.uploadedHealthFile = {} as HealthFile;
    const fileUpload = this.healthFileUploadService.uploadFile(this.uploadFile).subscribe(
      uploadedFile => {
        console.log('completed entire sequence')
        this.uploadedHealthFile = uploadedFile;
        this.uploadFile = {} as File;
      }
      
      );
  }

  fileChange(event: any): void {
    this.uploadFile = event.target.files[0];
  }
}
