import { Component } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  public linksMenu = [
    {
      name:'Home',
      url: './home'
    },
    {
      name:'Martini',
      url: './martini'
    },
    {
      name: 'Vodka',
      url: './vodka'
    },
    {
      name: 'Buscador',
      url: './search'
    }
  ]
}
