import { Component, OnInit, ENVIRONMENT_INITIALIZER } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../users.service';
import AWSS3UploadAshClient from 'aws-s3-upload-ash';
import { environment }  from './../../environments/environment.development';
import { UploadResponse } from 'aws-s3-upload-ash/dist/types';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit{
  fileSelected: any = null;
  id:any = localStorage.getItem("userID");

  constructor(
    private router: Router,
    private userService: UserService,

  ) { }

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

  getImageUrl(){
    return "https://ppbucketcloud.s3.amazonaws.com/"+this.id;
  }

  user = {
    profilePhoto: 'path/to/default-image.png', // Placeholder image path
    fullName: 'Jane Doe',
    email: 'jane.doe@example.com',
    phoneNumber: '123-456-7890',
    location: 'Country',
    aboutMe: 'A little bit about me...'
  };

  ngOnInit(): void {
    this.userService.getUserByID(localStorage.getItem("userID")).subscribe({
      next: (response: any) => {
        this.user.fullName = response.name;
        this.user.email = response.email;
        this.user.phoneNumber = response.phoneNumber;
        this.user.location = response.location;
        this.user.aboutMe = response.aboutMe;
      }, error: (err:any) => {
        console.log(err);
      }
    });
  }

  onChooseImage(event: any) {
    // Logic to choose an image
  }

  onRemoveImage() {
    // Logic to remove the image
  }

  onCancel() {
    // Logic to handle cancellation
  }

  onSaveProfile() {
    
  }
  goToHabits() {
    this.router.navigate(['/habits']);
  }

  reloadCurrentPage() {
    this.router.navigate(['user-profile']);
  }

  async handleSendFile(){
    console.log("handleSendFile");
    await this.S3CustomClient
      .uploadFile(this.fileSelected, this.fileSelected.type, undefined, this.id, "private")
      .then((data: UploadResponse) => {
        console.log(data);
        setTimeout(() => {
          // Your code to execute after the delay
          console.log('Delayed execution!');
        }, 2000); 
        window.location.reload();
      })
      .catch((err:any) => console.log(err));
  }
}
