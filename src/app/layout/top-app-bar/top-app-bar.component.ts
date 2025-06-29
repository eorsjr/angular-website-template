import { Component} from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-top-app-bar',
  standalone: true,
  imports: [],
  templateUrl: './top-app-bar.component.html',
  styleUrl: './top-app-bar.component.css'
})
export class TopAppBarComponent {

  constructor(public themeService: ThemeService, public navService: NavigationService) {
  }

  /**
 * Toggles between light and dark color schemes.
 */
  public toggleColorScheme(): void {
    this.themeService.toggleColorScheme();
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
