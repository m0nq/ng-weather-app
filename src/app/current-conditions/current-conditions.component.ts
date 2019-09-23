import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

  zipCodes: Array<string>;

  constructor(private store: Store<State>) {
    this.store.select(state => state.zipCodes)
        .subscribe(zips => this.zipCodes = zips.zipCodes);
  }
}
