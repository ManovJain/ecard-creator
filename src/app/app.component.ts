import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedImage: string = '';
  texts: string[] = [];

  onImageUploaded(imageUrl: string) {
    this.selectedImage = imageUrl;
  }

  onTextAdded(newText: string) {
    this.texts.push(newText);
  }
}
