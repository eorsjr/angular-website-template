import { Component, effect } from '@angular/core';
import { ScrollingService } from '../../services/scrolling.service';
import { NavigationService } from '../../services/navigation.service';
import { ScrimService } from '../../services/scrim.service';

@Component({
  selector: 'app-scrim',
  standalone: true,
  templateUrl: './scrim.component.html',
  styleUrls: ['./scrim.component.css']
})
export class ScrimComponent {

  private drawerOpen = false; // Tracks if the navigation drawer is open

  constructor(private scrollingService: ScrollingService, public navService: NavigationService, public scrimService: ScrimService) {
    effect(() => {
      this.drawerOpen = this.navService.navigationDrawerOpen();

      if (this.drawerOpen) {
        this.scrollingService.disableScroll();
      } else {
        this.scrollingService.enableScroll();
      }
    });
  }

  /**
   * Toggles the navigation drawer if it is currently open.
   * @returns {void}
   */
  public toggleDrawer(): void {
    if (this.navService.navigationDrawerOpen()) {
      this.navService.toggleNavigationDrawer();
    }
  }
}