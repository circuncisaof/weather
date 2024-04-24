import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Output() emitterEvent = new EventEmitter<string>();
  @Input() name: string = '';



  get emmitEvent() {
    return this.emitterEvent.emit()
  }
}
