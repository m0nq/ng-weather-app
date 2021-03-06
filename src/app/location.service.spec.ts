import { inject, TestBed } from '@angular/core/testing';

import { LocationService } from './location.service';
import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';

describe('Location2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationService, WeatherService], imports: [HttpClientModule]
    });
  });

  it('should be created', inject([LocationService], (service: LocationService) => {
    expect(service).toBeTruthy();
  }));
});
