import { Component } from '@angular/core';
import { SlideshowComponent } from "../../slideshow/slideshow.component";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [SlideshowComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

}
