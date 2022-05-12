import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  progress = 0;
  constructor() { }

  ngOnInit(): void {
  }

  selectFile(event: Event): void {
    
  }

  upload(): void {
   
    var i =0;
    while(i<=100){
      this.progress = i;
      i++
    }
  }

}
