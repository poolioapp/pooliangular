import { SidebarStatus } from './models/domain/sidebar-status.model';
import { Action } from '@ngrx/store';

export enum AppActionTypes {
  SetSidebarMode = '[App] SetSidebarMode Sidebar',
}

export class SetSidebarMode implements Action {
  readonly type = AppActionTypes.SetSidebarMode;

  constructor(public payload: SidebarStatus) {}
}

export type AppActions = SetSidebarMode;
