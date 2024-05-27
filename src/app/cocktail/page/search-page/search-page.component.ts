import { Component } from '@angular/core';
import {DrinksService} from "../../../services/drinks.service";
import {Cocktail, DrinksResponse} from "../../../interfaces/interfaces.interface";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {

  constructor(private DrinkService: DrinksService) {}

  public drinks!:DrinksResponse;// camion
  public result!:Cocktail[];// caja

  searchbyCocktail(cocktail_search:string):void {
    this.DrinkService.searchbyName(cocktail_search).subscribe(
      response => {
        this.result = response.drinks;
        this.drinks = response;
        console.log(this.drinks);
        console.log(this.result);

      }
    )
  }
}
