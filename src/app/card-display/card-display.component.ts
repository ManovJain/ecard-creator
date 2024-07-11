import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CardDisplayComponent {
  @Input() selectedImage: string = '';
  @Input() texts: string[] = []; // Input property to accept an array of texts

  addText(newText: string) {
    this.texts.push(newText);
  }
}
