import {Component, OnInit, Output} from '@angular/core';
import {Card_generic, Cocktail} from "../../../interfaces/interfaces.interface";
import {DrinksService} from "../../../services/drinks.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

      Mojitos: Card_generic [] = [];

      info:Card_generic = {
        titulo: 'pepito',
        imagen: 'a',
        descripcion: 'perfil',
        tipo: 'admin'
      }

      constructor(private DrinkService: DrinksService) {
      }

      ngOnInit():void {
        this.DrinkService.getDrinks().subscribe(
          data => {
            for (let i = 0;i<=data.drinks.length; i++ ) {
              this.Mojitos.push({

                titulo: data.drinks[i].strDrink ,
                descripcion: data.drinks[i].strInstructions,
                imagen: data.drinks[i].strDrinkThumb,
                tipo: data.drinks[i].strCategory
              });

            }
          }

        );
      }


}
