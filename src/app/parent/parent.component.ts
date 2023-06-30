import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  @Output() clickEvent: EventEmitter<void> = new EventEmitter<void>();

  onClick(): void {
    this.clickEvent.emit();
  }
}
