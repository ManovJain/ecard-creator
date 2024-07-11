import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class GalleryComponent {
  @Output() close = new EventEmitter<void>();
  @Output() imageSelected = new EventEmitter<string>();

  images: string[] = [
    '../../assets/card.png',
    '../../assets/card.png',
    '../../assets/card.png',
    '../../assets/card.png',
    '../../assets/card.png',
    '../../assets/card.png',
    '../../assets/card.png',
    '../../assets/card.png',
    '../../assets/card.png',
    '../../assets/card.png',
    '../../assets/card.png',
    '../../assets/card.png',
    '../../assets/card.png',
    '../../assets/card.png',
    '../../assets/card.png',
    '../../assets/card.png',
    '../../assets/card.png',
    '../../assets/card.png',
    '../../assets/card.png',
    '../../assets/card.png',
    '../../assets/card.png',
    '../../assets/card.png',
    '../../assets/card.png',
    '../../assets/card.png',
  ]; 

  selectImage(image: string) {
    this.imageSelected.emit(image);
  }

  onClose(): void {
    this.close.emit();
  }
}
