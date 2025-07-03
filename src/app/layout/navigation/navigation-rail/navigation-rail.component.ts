import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { NavigationService } from '../../../services/navigation.service';
import { ScrollingService } from '../../../services/scrolling.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation-rail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navigation-rail.component.html',
  styleUrl: './navigation-rail.component.css'
})
export class NavigationRailComponent {

  constructor(public navService: NavigationService, public scrollingService: ScrollingService) {
  }
}
