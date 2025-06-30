import { Component } from '@angular/core';
import { LightboxService } from '../services/lightbox.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.css'
})
export class LightboxComponent {

  constructor(public lightboxService: LightboxService) { }

  public loaded = false;

  /**
   * Called when the lightbox image loads.
   * Triggers the fade-in effect.
   * @returns {void}
   */
  public onImageLoad(): void {
    this.loaded = true;
  }

  /**
   * Closes the lightbox overlay.
   * @returns {void}
   */
  public closeLightbox(): void {
    this.loaded = false;
  setTimeout(() => {
    this.lightboxService.closeLightbox();
  }, 300); // Wait for fade-out to finish
  }

  /**
   * Shows the previous image in the lightbox.
   * @returns {void}
   */
  public showPreviousImage(): void {
    this.loaded = false;
    this.lightboxService.showPreviousImage();
  }

  /**
   * Shows the next image in the lightbox.
   * @returns {void}
   */
  public showNextImage(): void {
    this.loaded = false;
    this.lightboxService.showNextImage();
  }

}
