import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-navigation-drawer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navigation-drawer.component.html',
  styleUrl: './navigation-drawer.component.css'
})
export class NavigationDrawerComponent {

  constructor(public navService: NavigationService) {
  }
}
