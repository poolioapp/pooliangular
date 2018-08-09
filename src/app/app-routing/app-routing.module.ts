import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SnookerComponent } from '../games/snooker/snooker.component';
import { LoginGuard } from './login.guard';
import { OnlyLoggedInUsersGuard } from './only-logged-in-users.guard';

export const appRoutes: Routes = [
  /*{
    path: 'login',
    loadChildren: '../login/login.module',
     canActivate: [LoginGuard],
  },*/
  {
    path: '',
    // canActivate: [OnlyLoggedInUsersGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'snooker',
        component: SnookerComponent,
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
