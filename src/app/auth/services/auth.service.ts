import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http:HttpClient) {
  }

  enviarCredenciales (email:string, password: string): void {
    console.log(email, password);
  }
}
