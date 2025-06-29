import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  public navigationDrawerOpen = signal(false); // Signal to track whether the navigation drawer is open

  /**
 * Toggles the navigation drawer's visibility and updates its class.
 * @returns {void}
 */
  public toggleNavigationDrawer(): void {
    const drawer = document.querySelector('.navigation-drawer');

    if (drawer) {
      this.navigationDrawerOpen.set(!this.navigationDrawerOpen());
      drawer.classList.toggle('show');
    }
  }
}

