import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { AddZipCode } from '../actions/zip-code.actions';

@Component({
  selector: 'app-zip-code-entry',
  templateUrl: './zip-code-entry.component.html'
})
export class ZipCodeEntryComponent {

  constructor(private store: Store<State>) { }

  addLocation(zipCode: String) {
    this.store.dispatch(new AddZipCode(zipCode));
  }
}
