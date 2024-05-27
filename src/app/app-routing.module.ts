import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./cocktail/page/home-page/home-page.component";
import {LayoutPageComponent} from "./cocktail/page/layout-page/layout-page.component";
import {AuthModule} from "./auth/auth.module";
import {AuthPagesComponent} from "./auth/pages/auth-pages/auth-pages.component";


const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    loadChildren: ()=> import(`./cocktail/cocktail.module`).then(m => m.CocktailModule )
  },
  {
    path: 'auth',
    loadChildren: ()=> import(`./auth/auth.module`).then(m => m.AuthModule )
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
