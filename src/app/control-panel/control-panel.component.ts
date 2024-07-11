import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SocialMediaButtonsComponent } from '../social-media-buttons/social-media-buttons.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { EmailService } from '../email.service'; // Import the email service

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, SocialMediaButtonsComponent, GalleryComponent]
})
export class ControlPanelComponent {
  @Output() imageUploaded = new EventEmitter<string>();
  @Output() textAdded = new EventEmitter<string>();
  newText: string = '';
  donationAmount: number = 0;
  showGallery: boolean = false;
  recipientEmail: string = ''; // Add a property to hold the recipient email
  selectedImageUrl: string = ''; // Store the selected image URL

  constructor(private emailService: EmailService) {}

  addText() {
    this.textAdded.emit(this.newText);
    this.newText = ''; // Clear the input
  }

  uploadImage(event: any) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        this.imageUploaded.emit(result);
        this.selectedImageUrl = result; // Store the uploaded image URL
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please upload a valid image file.');
    }
  }

  selectFromGallery() {
    this.showGallery = true;
  }

  closeGallery() {
    this.showGallery = false;
  }

  selectImageFromGallery(image: string) {
    this.imageUploaded.emit(image);
    this.selectedImageUrl = image; // Store the selected image URL
    this.closeGallery();
  }

  shareOnSocialMedia() {
    // Share on social media logic here
  }

  sendEmail() {
    if (!this.recipientEmail) {
      alert('Please enter a recipient email address.');
      return;
    }
    this.emailService.sendEmail(this.recipientEmail, this.selectedImageUrl).subscribe(response => {
      alert('Email sent successfully!');
    }, error => {
      alert('Failed to send email.');
      console.error(error);
    });
  }
}
