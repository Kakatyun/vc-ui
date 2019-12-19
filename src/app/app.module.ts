import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { HeaderComponent } from './shared/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { NewsComponent } from './components/news/news.component';
import { VeterinariansComponent } from './components/veterinarians/veterinarians.component';
import { ServiceComponent } from './components/service/service.component';
import { ClinicsComponent } from './components/clinics/clinics.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    HeaderComponent,
    LeftMenuComponent,
    HeaderComponent,
    NewsComponent,
    VeterinariansComponent,
    ServiceComponent,
    ClinicsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
