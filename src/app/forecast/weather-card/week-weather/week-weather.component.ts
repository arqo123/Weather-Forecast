import { UtilsService } from "./../../../services/utils-service"
import { Component, Input, Output, EventEmitter } from "@angular/core"
import { WeatherForecast } from 'src/app/models/weather-forecast.model';

@Component({
  selector: "week-weather",
  templateUrl: "./week-weather.component.html",
  styleUrls: ["./week-weather.component.scss"],
})
export class WeekWeatherComponent {
  @Input() forecastArray : WeatherForecast[]
  @Output() showDetails = new EventEmitter()

  constructor(public utils: UtilsService) {}

  /**
   * Emiting showDetails event
   * on city  and data type
   * @param {WeatherForecast} weather
   */
  emitShowDetail(weather) {
    this.showDetails.emit(weather)
  }
}
