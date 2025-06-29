import { Component, effect, OnChanges } from '@angular/core';
import { ScrollingService } from '../../services/scrolling.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-scrim',
  standalone: true,
  templateUrl: './scrim.component.html',
  styleUrls: ['./scrim.component.css']
})
export class ScrimComponent {
  private drawerOpen = false; // Tracks if the navigation drawer is open

  constructor(private scrollingService: ScrollingService, public navService: NavigationService) {
    effect(() => {
      this.drawerOpen = this.navService.navigationDrawerOpen();

      if (this.drawerOpen) {
        this.scrollingService.disableScroll();
      } else {
        this.scrollingService.enableScroll();
      }
    });
  }
}