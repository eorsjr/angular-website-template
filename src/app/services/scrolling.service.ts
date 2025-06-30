import { Injectable, inject } from '@angular/core';
import { NavigationService } from './navigation.service';
import { effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollingService {
  private drawerOpen = false; // Tracks if the navigation drawer is open
  private scrollPos = 0; // Current scroll position of the window
  private prevScrollPos = window.scrollY; // Previous scroll position to determine scroll direction


  constructor(private navService: NavigationService) {
    effect(() => {
      this.drawerOpen = this.navService.navigationDrawerOpen();
    });
    window.addEventListener('scroll', () => this.handleScrollVisibility());
  }

  /**
   * Disables scrolling on the body element and saves the current scroll position.
   * @returns {void}
   */
  public disableScroll(): void {
    this.scrollPos = window.scrollY;
    document.body.style.top = `-${this.scrollPos}px`;
    document.body.style.overflow = 'hidden';
  }

  /**
   * Re-enables scrolling on the body element and restores the previous scroll position.
   * @returns {void}
   */
  public enableScroll(): void {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.overflow = "scroll";
    window.scrollTo({ top: this.scrollPos, behavior: 'instant' as ScrollBehavior });
    this.scrollPos = 0;
  }

  /**
   * Scrolls the window or pane to the top smoothly.
   * @returns {void}
   */
  public scrollToTop(): void {
    if (window.innerWidth < 600) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const paneElement = document.querySelector('.pane') as HTMLElement;
      paneElement?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  /**
   * Jumps to the top of the page or pane without smooth scrolling.
   * @returns {void}
   */
  public jumpToTop(): void {
    if (window.innerWidth < 600) {
      const html = document.documentElement;
      const originalBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = 'auto';
      window.scrollTo({ top: 0 });
      html.style.scrollBehavior = originalBehavior;
    } else {
      const paneElement = document.querySelector('.pane') as HTMLElement;
      if (paneElement) {
        const originalBehavior = paneElement.style.scrollBehavior;
        paneElement.style.scrollBehavior = 'auto';
        paneElement.scrollTo({ top: 0 });
        paneElement.style.scrollBehavior = originalBehavior;
      }
    }
  }

  /**
   * Toggles visibility of navigation and top app bar based on scroll direction.
   * @returns {void}
   */
  public handleScrollVisibility(): void {
    const navComponent = document.querySelector('.navigation-component') as HTMLElement;
    const topAppBar = document.querySelector('.top-app-bar') as HTMLElement;

    const currentScrollPos = window.scrollY;

    if (!this.drawerOpen) {
      if (window.innerWidth >= 600 || this.prevScrollPos > currentScrollPos || currentScrollPos < 1) {
        navComponent?.classList.remove('remove');
      } else {
        navComponent?.classList.add('remove');
      }

      if (window.innerWidth < 600) {
        if (currentScrollPos > this.prevScrollPos && currentScrollPos > 1) {
          topAppBar?.classList.add('remove');
        } else if (currentScrollPos < this.prevScrollPos) {
          topAppBar?.classList.remove('remove');
        }
      } else {
        topAppBar?.classList.remove('remove');
      }
    }

    this.prevScrollPos = currentScrollPos;
  }
}
