import { Component } from '@angular/core';
import { SlideshowComponent } from "../../slideshow/slideshow.component";
import { ImageGridComponent } from "../../image-grid/image-grid.component";
import { CardComponent } from "../../card/card.component";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [SlideshowComponent, ImageGridComponent, CardComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
    imageGridData = [
    {
      src: 'https://placehold.co/400x300',
      width: '400px',
      height: '300px',
      alt: 'Template Image 400x300'
    },
    {
      src: 'https://placehold.co/200x250',
      width: '200px',
      height: '250px',
      alt: 'Template Image 200x250'
    },
    {
      src: 'https://placehold.co/300x200',
      width: '300px',
      height: '200px',
      alt: 'Template Image 300x200'
    },
    {
      src: 'https://placehold.co/1600x900',
      width: '1600px',
      height: '900px',
      alt: 'Template Image 1600x900'
    }
  ];
}
