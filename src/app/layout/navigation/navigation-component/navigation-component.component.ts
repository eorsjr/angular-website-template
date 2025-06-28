import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollingService } from '../../../services/scrolling.service';

@Component({
  selector: 'app-navigation-component',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navigation-component.component.html',
  styleUrl: './navigation-component.component.css'
})
export class NavigationComponentComponent implements AfterViewInit {
  constructor(public scrollingService: ScrollingService, private elRef: ElementRef) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const activeButton = this.elRef.nativeElement.querySelector('#active-indicator');
      if (activeButton) {
        activeButton.addEventListener('click', () => this.scrollingService.scrollToTop());
      }
    });
  }
}
