import { Component } from '@angular/core';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  resetUpload1: boolean
  
  afuConfig = {
    theme: 'dragNDrop',
    multiple: true,
    formatsAllowed: '.json,.csv',
    uploadAPI: {
      url: 'https://slack.com/api/files.upload',
    },
  };

  docUpload(env: object) {
    console.log(env);
  }
}
