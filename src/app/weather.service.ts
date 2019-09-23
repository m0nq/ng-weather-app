import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {

  static URL = 'http://api.openweathermap.org/data/2.5';
  static APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  static ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
  private currentConditions = [];

  constructor(private http: HttpClient) { }

  loadCurrentConditions(zipCode: string): Observable<any> {
    // tslint:disable-next-line:max-line-length
    // Here we make a request to get the current conditions data from the API. Note the use of backticks and an expression to insert the zipCode
    return this.http.get(`${ WeatherService.URL }/weather?zip=${ zipCode },us&units=imperial&APPID=${ WeatherService.APPID }`);
  }

  removeCurrentConditions(zipCode: string) {
    for (let i in this.currentConditions) {
      if (this.currentConditions[i].zip === zipCode) {
        this.currentConditions.splice(+i, 1);
      }
    }
  }

  getCurrentConditions(): any[] {
    return this.currentConditions;
  }

  getForecast(zipCode: string): Observable<any> {
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipCode
    return this.http.get(`${ WeatherService.URL }/forecast/daily?zip=${ zipCode },us&units=imperial&cnt=5&APPID=${ WeatherService.APPID }`);

  }

  getWeatherIcon(id) {
    if (id >= 200 && id <= 232) {
      return WeatherService.ICON_URL + 'art_storm.png';
    } else if (id >= 501 && id <= 511) {
      return WeatherService.ICON_URL + 'art_rain.png';
    } else if (id === 500 || (id >= 520 && id <= 531)) {
      return WeatherService.ICON_URL + 'art_light_rain.png';
    } else if (id >= 600 && id <= 622) {
      return WeatherService.ICON_URL + 'art_snow.png';
    } else if (id >= 801 && id <= 804) {
      return WeatherService.ICON_URL + 'art_clouds.png';
    } else if (id === 741 || id === 761) {
      return WeatherService.ICON_URL + 'art_fog.png';
    } else {
      return WeatherService.ICON_URL + 'art_clear.png';
    }
  }

}
