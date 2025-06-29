import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slideshow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.css'
})
export class SlideshowComponent {
  @Input() images: { src: string; alt?: string }[] = []; // Array of images to display in the slideshow

  currentIndex = 0; // Index of the currently displayed image
  private intervalId: any;

  ngOnInit(): void {
    if (this.images.length > 1) {
      this.startSlideshow();
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.intervalId);
  }
  /**
   * Starts the slideshow by changing the current image index every 5 seconds.
   * @returns {void}
   */
  private startSlideshow(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000);
  }

}
