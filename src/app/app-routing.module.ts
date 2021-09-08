import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashModule } from './splash/splash.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./splash/splash.module').then(m => SplashModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
