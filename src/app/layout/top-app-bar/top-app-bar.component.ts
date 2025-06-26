import { Component, signal, EventEmitter, Output, Input } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-top-app-bar',
  standalone: true,
  imports: [],
  templateUrl: './top-app-bar.component.html',
  styleUrl: './top-app-bar.component.css'
})
export class TopAppBarComponent {

  constructor(private themeService: ThemeService) {
  }

  @Input() public drawerOpen = false; // Indicates whether the navigation drawer is open
  @Output() public toggleDrawerRequested = new EventEmitter<void>(); // Event emitter to request toggling the navigation drawer

  /**
   * Emits an event to the parent component requesting the navigation drawer to toggle.
   * @returns {void}
   */
  public toggleDrawer(): void {
    this.toggleDrawerRequested.emit();
  }

  /**
   * Signal to track whether the current color scheme is dark mode.
   * Initialized based on the body's class list.
   */
  public isDarkMode = signal(document.body.classList.contains('dark'));

  /**
 * Toggles between light and dark color schemes.
 */
  public toggleColorScheme(): void {
    this.themeService.toggleColorScheme();
    this.isDarkMode.set(document.body.classList.contains('dark'));
  }

  /**
   * Switches to the next theme in the themes array.
   */
  public switchTheme(): void {
    this.themeService.switchTheme();
  }

  /**
   * Switches to the next font in the fonts array.
   */
  public switchFont(): void {
    this.themeService.switchFont();
  }

}
