import { Component, OnChanges } from '@angular/core';
import { ScrollingService } from '../../services/scrolling.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-scrim',
  standalone: true,
  templateUrl: './scrim.component.html',
  styleUrls: ['./scrim.component.css']
})
export class ScrimComponent implements OnChanges {

  constructor(private scrollingService: ScrollingService, public navService: NavigationService) {}

  public isVisible = false; // Internal visibility state used to trigger CSS transitions.

  /**
   * Updates the internal visibility state in response to input changes.
   * @returns {void}
   */
  public ngOnChanges(): void {
    if (this.navService.navigationDrawerOpen()) {
      requestAnimationFrame(() => {
        this.scrollingService.disableScroll();
      });
    } else {
      this.scrollingService.enableScroll();
    }
  }
}