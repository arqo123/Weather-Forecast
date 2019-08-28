import { WeatherForecast } from './../../models/weather-forecast.model';
import { UtilsService } from "./../../services/utils-service"
import { WeatherService } from "./../../services/weather-service"
import { Component, OnInit, OnDestroy } from "@angular/core"
import { ActivatedRoute } from "@angular/router"

import { Subscription } from "rxjs"

@Component({
  selector: "weather-card",
  templateUrl: "./weather-card.component.html",
  styleUrls: ["./weather-card.component.scss"],
})
export class WeatherCardComponent implements OnInit, OnDestroy {
  params: any = {}
  weather: WeatherForecast[]
  ready: boolean = false
  currentWeather : WeatherForecast
  renderDetails: boolean = false
  selectedDay: WeatherForecast
  subscription: Subscription

  constructor(private activeRoute: ActivatedRoute, private weatherService: WeatherService, private utils: UtilsService) {
    this.getLinkParam()
  }

  async ngOnInit() {
    await this.getCurrentWeather()
    await this.getWeatherForecast()
  }

  /**
   * Setting current weather depending on city
   */
  async getCurrentWeather() {
    this.currentWeather = await this.weatherService.getWeatherByCity(this.params.city, "weather")
  }

  /**
   * Converting 5 day / 3 hour forecast into
   * a 'average' weather for each day
   */
  async getWeatherForecast() {
    let weather = await this.weatherService.getWeatherByCity(this.params.city, "forecast")
    let lastDayIndex = new Date(weather.list[0].dt_txt).getDay()
    let data = []
    var maxTemp = 0
    var minTemp = 99
    let midDayWeather = []
    for (let i = 0; i < weather.list.length; i++) {
      let forecast = weather.list[i]
      forecast.date = new Date(forecast.dt_txt)
      let dayIndex = forecast.date.getDay()
      if (dayIndex == lastDayIndex) {
        if (forecast.date.getHours() == 12) midDayWeather = { ...forecast.weather }
        if (minTemp > forecast.main.temp_min) minTemp = forecast.main.temp_min
        if (maxTemp < forecast.main.temp_max) maxTemp = forecast.main.temp_max
      } else {
        let prevForecast = i > 0 ? weather.list[i - 1] : weather.list[i]
        lastDayIndex = dayIndex
        prevForecast.main.temp_min = minTemp
        prevForecast.main.temp_max = maxTemp
        prevForecast.weather = midDayWeather && midDayWeather[0] ? midDayWeather : forecast.weather
        maxTemp = 0
        minTemp = 99
        midDayWeather = []
        data.push(prevForecast)
      }
    }
    this.weather = data
    this.ready = true
  }

  /**
   * Setting city from link
   */
  async getLinkParam() {
    this.subscription = this.activeRoute.firstChild.params.subscribe(res => {
      this.params = res
    })
  }

  /**
   * Enabling rendering weather details
   */
  async showDayDetails(data) {
    this.renderDetails = true
    this.selectedDay = data
  }

  /**
   * Disabling rendering weather details
   */
  async disableDetailView() {
    this.renderDetails = false
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
