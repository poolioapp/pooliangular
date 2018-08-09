import { Component, Input } from '@angular/core';
import { SidebarItem } from '../sidenav.component';

@Component({
  selector: 'pool-sidenav-item',
  templateUrl: './sidenav-item.component.html',
})
export class SidenavItemComponent {
  @Input() model: SidebarItem;
  @Input() size: number;

  constructor() { }
}
