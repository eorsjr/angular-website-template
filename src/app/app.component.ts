import { Component } from '@angular/core';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { PaneComponent } from "./layout/pane/pane.component";
import { TopAppBarComponent } from "./layout/top-app-bar/top-app-bar.component";
import { ThemeService } from './services/theme.service';
import { ElevationService } from './services/elevation.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ScrimComponent } from './layout/scrim/scrim.component';
import { LightboxComponent } from './lightbox/lightbox.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent, PaneComponent, TopAppBarComponent, ScrimComponent, LightboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-website-template';

  constructor(private router: Router, private themeService: ThemeService, private elevationService: ElevationService) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.themeService.setInitialFont();
      });
  }

  ngAfterViewInit() {
    this.themeService.setInitialTheme();
    this.themeService.setInitialColorScheme();
    this.themeService.handleColorSchemeChange();
    setTimeout(() => {
      this.themeService.updateThemeColor();
    });
    this.elevationService.initialize();
  }
}
