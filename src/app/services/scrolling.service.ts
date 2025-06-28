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
    if (window.innerWidth < 600) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const paneElement = document.querySelector('.pane') as HTMLElement;
      paneElement?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
