import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthPagesComponent} from "./pages/auth-pages/auth-pages.component";

const routes: Routes = [
  {
        path:'login',
        component: AuthPagesComponent
  },
  {
    path: '**',
    component: AuthPagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
