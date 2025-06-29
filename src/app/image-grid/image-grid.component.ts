import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-grid.component.html',
  styleUrl: './image-grid.component.css'
})
export class ImageGridComponent {
  @Input() images: { src: string; alt?: string; width?: string; height?: string }[] = []; // Default to an empty array if no images are provided

  /**
   * Opens an image in a new tab.
   * @param src The source URL of the image to open in a new tab.
   * @returns void
   */
  openImage(src: string): void {
    window.open(src, '_blank');
  }
}
