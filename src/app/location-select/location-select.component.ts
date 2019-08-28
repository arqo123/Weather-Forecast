import { WeatherService } from "./../services/weather-service"
import { LocationService } from "./../services/location-service"
import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { ErrorHandlerService } from "../services/error-handler-service"

@Component({
  selector: "location-select",
  templateUrl: "./location-select.component.html",
  styleUrls: ["./location-select.component.css"],
})
export class LocationSelectComponent implements OnInit {
  selectedCity: string = ""

  constructor(
    private locationService: LocationService,
    private router: Router,
    private weatherService: WeatherService,
    private errorHandler: ErrorHandlerService,
  ) {}

  async ngOnInit() {}

  /**
   * Setting city name depending coordinates
   */
  async setCurrentCity() {
    try {
      let location = await this.locationService.getLocation()
      this.selectedCity = await this.locationService.getCityNameByCoordinates(location.coords)
    } catch (err) {}
  }

  /**
   * Validating city address
   * and navigating to forecast
   */
  async navigateToWeather() {
    try {
      await this.weatherService.getWeatherByCity(this.selectedCity, "weather")
      this.router.navigate([`forecast/daily/${this.selectedCity}`])
    } catch (err) {}
  }
}
