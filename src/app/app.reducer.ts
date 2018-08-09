import { SidebarStatus } from './models/domain/sidebar-status.model';
import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../environments/environment';
import { AppActions, AppActionTypes } from './app.actions';

// tslint:disable-next-line no-empty-interface
export interface State {}
export const reducers: ActionReducerMap<State> = {};
export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

// Application Global State
export interface AppState extends State {
  sidebarStatus: SidebarStatus;
}

export const initialAppState: AppState = { sidebarStatus: SidebarStatus.Open };

export function appReducer(state = initialAppState, action: AppActions): AppState {
  switch (action.type) {
    case AppActionTypes.SetSidebarMode:
      return {
        ...state,
        sidebarStatus: action.payload,
      };

    default:
      return state;
  }
}

export const appFeatureName = 'app';

export const selectAppFeature = createFeatureSelector<AppState>(appFeatureName);

export const selectSidebarStatus = createSelector(selectAppFeature, state => state.sidebarStatus);
