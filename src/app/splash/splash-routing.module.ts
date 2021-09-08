import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandSplashComponent } from './brand-splash/brand-splash.component';

const routes: Routes = [
  {
    path:'',
    component: BrandSplashComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SplashRoutingModule { }
