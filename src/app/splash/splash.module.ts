import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from "../shared/shared.module";

import { SplashRoutingModule } from './splash-routing.module';
import { BrandSplashComponent } from './brand-splash/brand-splash.component';
import { JoinTheJourrneyComponent } from './join-the-jourrney/join-the-jourrney.component';


@NgModule({
  declarations: [
    BrandSplashComponent,
    JoinTheJourrneyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SplashRoutingModule
  ]
})
export class SplashModule { }
