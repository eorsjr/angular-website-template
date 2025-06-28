import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElevationService {

  constructor() { }

  private topAppBar: HTMLElement | null = null; // Reference to the top app bar element
  private isDrawerOpen = false; // State to track if the navigation drawer is open

  /**
   * Initializes the elevation service by setting up event listeners for scroll and resize events.
   * @returns {void}
   */
  public initialize(): void {
    this.topAppBar = document.querySelector('.top-app-bar');
    window.addEventListener('scroll', () => this.updateElevation());
    window.addEventListener('resize', () => this.updateElevation());
  }

  /**
   * Updates the elevation of the top app bar based on the scroll position or if the navigation drawer is open.
   * @returns {void}
   */
  private updateElevation(): void {

    const scrolled = window.scrollY > 0;

    if (!this.topAppBar) return;

    if (scrolled || this.isDrawerOpen) {
      this.topAppBar.style.setProperty('box-shadow', 'var(--elevation-level-1)');
    } else {
      this.topAppBar.style.setProperty('box-shadow', 'none');
    }
  }

  /**
 * Sets the state of the navigation drawer and updates the elevation accordingly.
 * @param {boolean} isOpen - Indicates whether the navigation drawer is open or closed.
 */
  public setDrawerState(isOpen: boolean): void {
    this.isDrawerOpen = isOpen;
    this.updateElevation();
  }
}
