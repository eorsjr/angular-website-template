import { Component } from '@angular/core';
import { SlideshowComponent } from '../../slideshow/slideshow.component';
import { CopyTableService } from '../../services/copy-table.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SlideshowComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(public copyTableService: CopyTableService) { }

  copyableTable1Data = [
    ['John', 'Doe'],
    ['Jane', 'Doe']
  ];

  /**
   * Copies the entire table element to the clipboard.
   * @param table HTMLTableElement to copy
   */
  copyTable(table: HTMLTableElement): void {
    this.copyTableService.copyTable(table);
  }

  /**
   * Copies a specific cell's text to the clipboard.
   * @param text Text to copy to the clipboard
   */
  copyCell(text: string): void {
    this.copyTableService.copyText(text);
  }

}
