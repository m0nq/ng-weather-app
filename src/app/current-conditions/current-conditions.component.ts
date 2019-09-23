import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectZipCodeList, State } from '../reducers';
import { WeatherService } from '../weather.service';
import { RemoveZipCode } from '../actions/zip-code.actions';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

  zipCodes: Array<String>;

  currentConditions: Map<String, any>;

  constructor(private store: Store<State>, public weatherService: WeatherService) {
    store.select(selectZipCodeList)
        .subscribe(zips => this.zipCodes = zips);

    store.select(state => state.currentConditions)
        .subscribe(conditions => this.currentConditions = conditions.currentConditions);
  }

  getConditions(zip: String) {
    return this.currentConditions.get(zip);
  }

  removeZip(zip: String) {
    this.store.dispatch(new RemoveZipCode(zip));
  }

  showForecast(zip: String) {

  }
}
