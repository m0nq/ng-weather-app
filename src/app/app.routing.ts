import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastsListComponent } from './forecasts-list/forecasts-list.component';
import { MainPageComponent } from './main-page/main-page.component';

const appRoutes: Routes = [
  {
    path: '', component: MainPageComponent
  },
  {
    path: 'forecast/:zipCode', component: ForecastsListComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
