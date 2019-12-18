import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BaseLayoutComponent} from './layout/base-layout/base-layout.component';

export const routes: Routes = [{
  path: '',
  component: BaseLayoutComponent
},
  {path: '**', redirectTo: ''},
];

@NgModule(
  {
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  }
)
export class AppRoutingModule {

}
