import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginModule } from './login/login.module';
import { CommonComponentsModule } from './common/common.module';
import { GamesModule } from './games/games.module';
import { HighlightsModule } from './highlights/highlights.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FrameComponent } from './frame/frame.component';
import { AppComponent } from './app.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavItemComponent } from './sidenav/sidenav-item/sidenav-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FrameComponent,
    TitlebarComponent,
    SidenavComponent,
    SidenavItemComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,

    AppRoutingModule,
    LoginModule,
    CommonComponentsModule,
    GamesModule,
    HighlightsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
