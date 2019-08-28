import { WeatherForecast } from './../../../models/weather-forecast.model';
import { UtilsService } from "./../../../services/utils-service"
import { Component, Input, Output, EventEmitter } from "@angular/core"

@Component({
  selector: "day-weather-details",
  templateUrl: "./day-weather-details.component.html",
  styleUrls: ["../current-weather/current-weather.component.scss", "./day-weather-details.component.scss"],
})
export class DayWeatherDetailsComponent {
  @Input() data: WeatherForecast
  @Input() city: string
  @Output() disable = new EventEmitter()

  constructor(public utils: UtilsService) {} 

  /**
   * Emiting disable event
   */
  emitDisableDetail() {
    this.disable.emit()
  }
}
