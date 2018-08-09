import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pool-titlebar',
  templateUrl: './titlebar.component.html',
})
export class TitlebarComponent {

  @Input() title!: string;
  @Output() toggleSidenav = new EventEmitter();

  constructor() { }

  menuButtonClicked() {
    console.log('toggled menu');
    this.toggleSidenav.emit('');
  }
}
