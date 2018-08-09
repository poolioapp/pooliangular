import { Component, Input } from '@angular/core';
import { SidebarStatus } from '../frame/frame.component';


@Component({
  selector: 'pool-sidenav',
  templateUrl: './sidenav.component.html',
})
export class SidenavComponent {
  @Input() sidebarSize: SidebarStatus;
  sidebarItems!: SidebarItem[];

  constructor() {
    this.sidebarItems = <SidebarItem[]>[
      {
        text: 'Home',
        icon: 'home',
        linksTo: '/',
      },
      {
        text: 'Snooker',
        icon: 'android',
        linksTo: '/snooker',
      },
      {
        text: 'Pool',
        icon: 'face',
        linksTo: '/pool',
      }
    ];
  }
}
export interface SidebarItem {
  text: string;
  icon: string;
  linksTo: string;
}
