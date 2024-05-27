import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./page/home-page/home-page.component";
import {MartiniPageComponent} from "./page/martini-page/martini-page.component";
import {VodkaPageComponent} from "./page/vodka-page/vodka-page.component";
import {LayoutPageComponent} from "./page/layout-page/layout-page.component";
import {SearchPageComponent} from "./page/search-page/search-page.component";
import {DetailPageComponent} from "./page/detail-page/detail-page.component";

const routes: Routes = [
  {

    path:'',
    children: [
      {
        path:'home',
        component: HomePageComponent
      },
      {
        path:'vodka',
        component: VodkaPageComponent
      },
      {
        path:'martini',
        component: MartiniPageComponent
      },
      {
        path:'search',
        component: SearchPageComponent
      },
      {
        path: 'by/:id',
        component: DetailPageComponent
      },
      {
        path: '**',
        redirectTo: 'home'
     }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocktailRoutingModule { }
