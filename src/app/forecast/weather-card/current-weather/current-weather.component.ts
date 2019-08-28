import { UtilsService } from "./../../../services/utils-service"
import { Component, Input } from "@angular/core"
import { WeatherForecast } from "src/app/models/weather-forecast.model"

@Component({
  selector: "current-weather",
  templateUrl: "./current-weather.component.html",
  styleUrls: ["./current-weather.component.scss"],
})
export class CurrentWeatherComponent {
  @Input() data: WeatherForecast
  @Input() city: string

  constructor(public utils: UtilsService) {}
}
