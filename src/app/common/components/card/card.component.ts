import {Component, Input, OnInit} from '@angular/core';
import {Card_generic, Cocktail} from "../../../interfaces/interfaces.interface";

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
    @Input() public card_data:Card_generic | undefined;

    ngOnInit() {
      console.log(this.card_data);
    }
}
