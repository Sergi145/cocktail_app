import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {debounceTime, Subject, Subscription} from "rxjs";

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent implements OnInit, OnDestroy {

    private debounce:Subject<string> = new Subject<string>();
    private  debouncerSubscription?:Subscription;


    @Output() onValue = new EventEmitter<string>();

    searchInput(value:string):void {
        this.onValue.emit(value);
    }

    //Debounce

    @Output() onDebounce = new EventEmitter<string>();

    ngOnInit():void {

      this.debouncerSubscription= this.debounce
        .pipe(
          debounceTime(300)
        )
        .subscribe( valor => {
            this.onDebounce.emit(valor);
      })
    }

  ngOnDestroy():void {

   this.debouncerSubscription?.unsubscribe();
  }

  onKeyPress (searchTerm:string) {
    this.debounce.next(searchTerm);
  }


}
