import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  file: File;
  progress = 0;
  constructor() { }

  ngOnInit(): void {
  }

  selectFile(event: any): void {
    this.file = event!.target!.files[0];
  }

  upload(): void {
   
    
    while(this.progress<=100){
      this.progress ++;
    }
  }

}
