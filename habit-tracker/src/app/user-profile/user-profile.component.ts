import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent {
  user = {
    profilePhoto: 'path/to/default-image.png', // Placeholder image path
    fullName: 'Jane Doe',
    email: 'jane.doe@example.com',
    phoneNumber: '123-456-7890',
    location: 'Country',
    aboutMe: 'A little bit about me...'
  };

  onChooseImage() {
    // Logic to choose an image
  }

  onRemoveImage() {
    // Logic to remove the image
  }

  onCancel() {
    // Logic to handle cancellation
  }

  onSaveProfile() {
    // Logic to save the profile changes
  }
}
