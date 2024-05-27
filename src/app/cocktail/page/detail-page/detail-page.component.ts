import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DrinksService} from "../../../services/drinks.service";
import {Cocktail, DrinksResponse} from "../../../interfaces/interfaces.interface";
import {switchMap, tap} from "rxjs";

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.css'
})
export class DetailPageComponent implements OnInit {

  public cocktail?:DrinksResponse;
  public result!:Cocktail;// caja


  constructor(private router: Router,private activatedRoute: ActivatedRoute, private drinkService:DrinksService) {
  }

  ngOnInit():void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.drinkService.searchDrinkById(id))
      )
      .subscribe( resp => {
        console.log(resp);


        if (!resp  || resp.drinks == null) {
          console.log('Fallo');
          this.router.navigateByUrl('/home');
        }

        console.log('a entrado');

        this.result = resp.drinks[0];
        console.log(this.result);
      })
  }
}
