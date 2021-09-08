import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    ContactComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzGridModule
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzGridModule,
    ContactComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
