import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollingService {

  constructor() { }
  private scrollPos = 0; // Current scroll position of the window

  /**
   * Disables scrolling on the body element and saves the current scroll position.
   * @returns {void}
   */
  public disableScroll(): void {
    this.scrollPos = window.scrollY;
    document.body.style.top = `-${this.scrollPos}px`;
    document.body.style.position = 'fixed';
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
    console.log('Scrolling to top');

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
    console.log('Jumping to top');
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
}
