import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import { DrinksResponse} from "../interfaces/interfaces.interface";

@Injectable({  providedIn:
    'root'
})

export class DrinksService {

  constructor(private httpClient: HttpClient) {
  }

  private apiUrl:string= 'https://www.thecocktaildb.com/api/json/v1/1/';


  getDrinks():Observable<DrinksResponse> {

    return this.httpClient.get<DrinksResponse>(`${this.apiUrl}search.php?s=mojito`)
  }

  searchbyName (term:string):Observable<DrinksResponse> {
    return this.httpClient.get<DrinksResponse>(`${this.apiUrl}search.php?s=${term}`)

  }

  searchDrinkById (code:number):Observable<DrinksResponse> {

    return this.httpClient.get<DrinksResponse>(`${this.apiUrl}lookup.php?i=${code}`)
  }
}
