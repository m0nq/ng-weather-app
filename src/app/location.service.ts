import { Injectable } from '@angular/core';

export const LOCATIONS = 'locations';

@Injectable()
export class LocationService {

  locations: string[] = [];

  constructor() {

  }

  addLocation(zipCode: string) {
    this.locations.push(zipCode);
  }

  removeLocation(zipCode: string) {
    const index = this.locations.indexOf(zipCode);
    if (index !== -1) {
      this.locations.splice(index, 1);
    }
  }

  getLocations(): string[] {
    return this.locations;
  }
}
