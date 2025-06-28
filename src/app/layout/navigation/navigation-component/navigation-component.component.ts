import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollingService } from '../../../services/scrolling.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-component',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navigation-component.component.html',
  styleUrl: './navigation-component.component.css'
})
export class NavigationComponentComponent {
  constructor(public scrollingService: ScrollingService, private elRef: ElementRef, private router: Router) { }

  /**
   * Handles navigation button clicks.
   * If the clicked path matches the current route (excluding any anchor),
   * it triggers a smooth scroll to the top of the page.
   * Otherwise, it navigates to the new route.
   *
   * @param path - The target path to navigate or scroll within.
   * @returns {void}
   */
  public onNavClick(path: string): void {
    if (this.router.url.split('#')[0] === path) {
      this.scrollingService.scrollToTop();
    } else {
      this.router.navigate([path]);
    }
  }
}
