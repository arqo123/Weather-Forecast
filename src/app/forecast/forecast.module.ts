import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { WeekWeatherComponent } from './weather-card/week-weather/week-weather.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { ForecastRoutingModule } from './forecast-routing.module';
import { CurrentWeatherComponent } from './weather-card/current-weather/current-weather.component';
import { DayWeatherDetailsComponent } from './weather-card/day-weather-details/day-weather-details.component';
import { DetailedIconComponent } from './weather-card/day-weather-details/detailed-icon/detailed-icon.component';
import { NotifierModule } from 'angular-notifier';

const FORECAST_COMPONENTS = [WeatherCardComponent, WeekWeatherComponent ,CurrentWeatherComponent,DayWeatherDetailsComponent,DetailedIconComponent]

@NgModule({
  declarations: [...FORECAST_COMPONENTS     ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    ForecastRoutingModule,
    FlexLayoutModule,
    NotifierModule

  ],
  exports: [...FORECAST_COMPONENTS]
})
export class ForecastModule { }
