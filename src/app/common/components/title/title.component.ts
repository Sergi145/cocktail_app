import {Component, Input} from '@angular/core';

@Component({
  selector: 's-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
    @Input() public title = '';
}
