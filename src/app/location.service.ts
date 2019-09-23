import { Injectable } from '@angular/core';

export const LOCATIONS = 'locations';

@Injectable()
export class LocationService {

  locations: String[] = [];

  constructor() {

  }

  addLocation(zipCode: String) {
    this.locations.push(zipCode);
  }

  removeLocation(zipCode: String) {
    const index = this.locations.indexOf(zipCode);
    if (index !== -1) {
      this.locations.splice(index, 1);
    }
  }

  getLocations(): String[] {
    return this.locations;
  }
}
