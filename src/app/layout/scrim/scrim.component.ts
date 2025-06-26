import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-scrim',
  standalone: true,
  templateUrl: './scrim.component.html',
  styleUrls: ['./scrim.component.css']
})
export class ScrimComponent implements OnChanges {

  @Input() public visible = false; // Whether the scrim should be visible. Triggers transition state.
  @Output() public onScrimClick = new EventEmitter<void>(); // Emits when the scrim is clicked.

  public isVisible = false; // Internal visibility state used to trigger CSS transitions.

  /**
   * Updates the internal visibility state in response to input changes.
   * @returns {void}
   */
  public ngOnChanges(): void {
    if (this.visible) {
      requestAnimationFrame(() => {
        this.isVisible = true;
      });
    } else {
      this.isVisible = false;
    }
  }

  /**
   * Emits the click event to parent component.
   * @returns {void}
   */
  public onClick(): void {
    this.onScrimClick.emit();
  }
}