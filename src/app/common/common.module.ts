import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardComponent } from './components/card/card.component';
import { TitleComponent } from './components/title/title.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    SidebarComponent,
    CardComponent,
    TitleComponent
  ],
    exports: [
        SidebarComponent,
        CardComponent,
        TitleComponent
    ],
    imports: [
        CommonModule,
        RouterLink
    ]
})
export class CommonModules { }
