import { Injectable, Injector } from '@angular/core';
import { NavigationService } from './navigation.service';

@Injectable({
  providedIn: 'root'
})
export class ElevationService {

  constructor(private injector: Injector) { }

  private topAppBar: HTMLElement | null = null; // Reference to the top app bar element

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
  public updateElevation(): void {

    const scrolled = window.scrollY > 0;

    if (!this.topAppBar) return;
      const navigationService = this.injector.get(NavigationService);
    if (scrolled || navigationService.navigationDrawerOpen()) {
      this.topAppBar.style.setProperty('box-shadow', 'var(--elevation-level-1)');
    } else {
      this.topAppBar.style.setProperty('box-shadow', 'none');
    }
  }
}
