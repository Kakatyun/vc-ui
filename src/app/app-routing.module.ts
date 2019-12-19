import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsComponent} from './components/news/news.component';
import {VeterinariansComponent} from './components/veterinarians/veterinarians.component';
import {ServiceComponent} from './components/service/service.component';
import {ClinicsComponent} from './components/clinics/clinics.component';
import {LoginComponent} from './components/login/login.component';

/**todo add guard for not authorized *
 * canActivate: [AuthGuardService],*
 * *canActivateChild: [AuthGuardService], */

export const routes: Routes = [
  {path: 'news', component: NewsComponent},
  {path: 'clinic-services', component: ServiceComponent},
  {path: 'clinics', component: ClinicsComponent},
  {path: 'veterinarians', component: VeterinariansComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'news'},
];

@NgModule(
  {
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  }
)
export class AppRoutingModule {

}
