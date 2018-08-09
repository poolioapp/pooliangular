import { Component, Input } from '@angular/core';

@Component({
  selector: 'pool-frame',
  templateUrl: './frame.component.html',
})
export class FrameComponent {
  sidebarSize: SidebarStatus = SidebarStatus.large;
  title = 'Poolio';

  toggleSidenavSize() {
    this.sidebarSize = (this.sidebarSize === SidebarStatus.large) ? SidebarStatus.mini : SidebarStatus.large;
  }
}

export enum SidebarStatus {
  closed = 0,
  mini = 1,
  large = 2,
}
