import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormComponent } from './components/form/form.component';
import { AuthPagesComponent } from './pages/auth-pages/auth-pages.component';


@NgModule({
  declarations: [
    FormComponent,
    AuthPagesComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
