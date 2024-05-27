import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailRoutingModule } from './cocktail-routing.module';
import { HomePageComponent } from './page/home-page/home-page.component';
import {CommonModules} from "../common/common.module";
import { MartiniPageComponent } from './page/martini-page/martini-page.component';
import { VodkaPageComponent } from './page/vodka-page/vodka-page.component';
import { LayoutPageComponent } from './page/layout-page/layout-page.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchPageComponent } from './page/search-page/search-page.component';
import { AlertComponent } from './components/alert/alert.component';
import { DetailPageComponent } from './page/detail-page/detail-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    MartiniPageComponent,
    VodkaPageComponent,
    LayoutPageComponent,
    SearchInputComponent,
    SearchPageComponent,
    AlertComponent,
    DetailPageComponent
  ],
  imports: [
    CommonModule,
    CocktailRoutingModule,
    CommonModules
  ],

})
export class CocktailModule { }


