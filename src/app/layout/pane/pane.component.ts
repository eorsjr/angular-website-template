import { Component } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ScrollingService } from '../../services/scrolling.service';

@Component({
  selector: 'app-pane',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pane.component.html',
  styleUrl: './pane.component.css'
})
export class PaneComponent {
  constructor(private router: Router, private scrollingService: ScrollingService) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.scrollingService.enableScroll();
        this.scrollingService.jumpToTop();
      });
  }
}
