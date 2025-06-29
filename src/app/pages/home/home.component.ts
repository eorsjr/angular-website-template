import { Component } from '@angular/core';
import { SlideshowComponent } from '../../slideshow/slideshow.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SlideshowComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
