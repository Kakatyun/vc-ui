import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { HeaderComponent } from './shared/header/header.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from "./app-routing.module";
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { HorizontalMenuComponent } from './shared/horizontal-menu/horizontal-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    HeaderComponent,
    LeftMenuComponent,
    HorizontalMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
