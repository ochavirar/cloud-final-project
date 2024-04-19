import { Component, ENVIRONMENT_INITIALIZER } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AWSS3UploadAshClient from 'aws-s3-upload-ash';
import { UploadResponse } from 'aws-s3-upload-ash/dist/types';
import { environment }  from './../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
  fileSelected:any = null;

  config = {
    bucketName: 'ppbucketcloud',
    region: 'us-east-1',
    accessKeyId: environment.AWS_ACCESS_KEY,
    secretAccessKey: environment.AWS_SECRET_ACCESS_KEY,
    s3Url: 'https://ppbucketcloud.s3.amazonaws.com/'
  }

  S3CustomClient: AWSS3UploadAshClient = new AWSS3UploadAshClient(this.config);

  onChangeFile(event: any){
    console.log(event.target.files[0]);
    this.fileSelected = event.target.files[0];
  }

  async handleSendFile(){
    console.log(environment);
    console.log("handleSendFile");
    await this.S3CustomClient
      .uploadFile(this.fileSelected, this.fileSelected.type, undefined, this.fileSelected.name, "private")
      .then((data: UploadResponse) => console.log(data))
      .catch((err:any) => console.log(err));
  }
}
