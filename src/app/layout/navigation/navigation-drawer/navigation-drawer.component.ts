import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrimComponent } from '../../scrim/scrim.component';
import { ElevationService } from '../../../services/elevation.service';

@Component({
  selector: 'app-navigation-drawer',
  standalone: true,
  imports: [RouterModule, ScrimComponent],
  templateUrl: './navigation-drawer.component.html',
  styleUrl: './navigation-drawer.component.css'
})
export class NavigationDrawerComponent {

  constructor(private elevationService: ElevationService) {
  }

  /** Signal to track whether the navigation drawer is open */
  public navigationDrawerOpen = signal(false);

  /** Getter to check if the drawer is open */
  public get isDrawerOpen(): boolean {
    return this.navigationDrawerOpen();
  }

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

    this.elevationService.setDrawerState(this.navigationDrawerOpen());
  }
}
