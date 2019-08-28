import { WeatherForecast } from "./../models/weather-forecast.model"
import { environment } from "../../environments/environment"
import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { ErrorHandlerService } from "./error-handler-service"

@Injectable()
export class WeatherService {
  constructor(public http: HttpClient, private errorHandler: ErrorHandlerService) {}

  /**
   * Returning weather forecast depending
   * on city  and data type
   * @param {string} city
   * @param {string} type
   * @returns {Promise} Weather forecast
   */
  getWeatherByCity(city, type): Promise<WeatherForecast> {
    return new Promise((resolve, reject) => {
      this.http
        .get(`${environment.weatherApiAddress}${type}?q=${city}&appid=${environment.apiKey}&units=metric`)
        .toPromise()
        .then(
          (res: WeatherForecast) => {
            resolve(res)
          },
          err => {
            this.errorHandler.showError("Cant get data for this city")
            reject(err)
          },
        )
    })
  }
}
