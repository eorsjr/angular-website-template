import { Component, ViewChild } from '@angular/core';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { PaneComponent } from "./layout/pane/pane.component";
import { TopAppBarComponent } from "./layout/top-app-bar/top-app-bar.component";
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent, PaneComponent, TopAppBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-website-template';

  constructor(private themeService: ThemeService) { }

  ngAfterViewInit() {
    this.themeService.setInitialTheme();
    this.themeService.setInitialColorScheme();
    this.themeService.setInitialFont();
  }

  @ViewChild(NavigationComponent)
  navigation!: NavigationComponent;

  /**
   * Delegates the drawer toggle action to the child NavigationComponent.
   * @returns {void}
   */
  handleToggleDrawer(): void {
    this.navigation.toggleNavigationDrawer();
  }

  /**
   * Indicates whether the navigation drawer is currently open.
   * @returns {boolean}
   */
  get isDrawerOpen(): boolean {
    return this.navigation?.isDrawerOpen ?? false;
  }
}
