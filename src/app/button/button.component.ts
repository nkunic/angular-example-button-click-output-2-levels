import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Output() clickEvent = new EventEmitter<any>();

  onClick(event: any): void {
    this.clickEvent.emit(event);
  }
}
